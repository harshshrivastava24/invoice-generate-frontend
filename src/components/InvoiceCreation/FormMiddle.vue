<template>
    <div class="space-y-4">
        <div class="hidden md:flex bg-[#0c1633] text-white text-sm font-semibold rounded-t-md px-4 py-3">
            <div class="flex-1">Item</div>
            <div class="w-20 text-center">Quantity</div>
            <div class="w-24 text-center">Rate</div>
            <div class="w-24 text-right">Amount</div>
            <div class="w-12"></div>
        </div>

        <div v-for="(item, index) in itemDetails" :key="index"
            class="flex flex-col md:flex-row md:items-center border border-gray-200 rounded-md p-3 md:p-2 space-y-3 md:space-y-0 md:space-x-3">
            <input v-model="item.description" type="text" placeholder="Description of item/service..."
                class="flex-1 border border-gray-200 rounded-md px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500" />
            <input v-model.number="item.quantity" type="number" min="1"
                class="w-full md:w-20 border border-gray-200 rounded-md px-3 py-2 text-gray-700 text-center focus:outline-none focus:ring-1 focus:ring-blue-500" />
            <div class="flex w-full md:w-24 items-center border border-gray-200 rounded-md px-3 py-2">
                <span class="text-gray-400 mr-1 select-none">{{ currencies[currency] }}</span>
                <input v-model.number="item.rate" type="number" min="0"
                    class="w-full text-gray-700 text-right focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>
            <div class="w-full md:w-24 text-right text-gray-600 font-semibold select-none">
                {{ currencies[currency] }}{{ (item.quantity * item.rate).toFixed(2) }}
            </div>
            <button v-if="itemDetails.length > 1" @click="removeLineItem(index)" type="button"
                aria-label="Remove line item" class="text-red-600 hover:text-red-800 self-start md:self-auto">
                <RiCloseLargeFill class="w-5 h-auto" />
            </button>
        </div>

        <div class="flex justify-end mb-2">
            <label for="currency" class="text-gray-600 text-sm mr-2 self-center">Currency</label>
            <select id="currency" v-model="currency"
                class="border border-gray-200 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option v-for="(sign, code) in currencies" :key="code" :value="code">{{ code }}</option>
            </select>
        </div>

        <button @click="addLineItem"
            class="text-green-700 border border-green-700 rounded-md px-4 py-2 font-medium hover:bg-green-50 inline-flex items-center space-x-2">
            <RiAddLargeLine class="w-4 h-auto" />
            <span>Add Item</span>
        </button>

        <div class="mt-10 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
            <div class="flex flex-col gap-6 md:w-1/2">
                <div>
                    <label for="notes" class="block mb-1 text-gray-700 text-sm">Notes</label>
                    <textarea id="notes" rows="3" v-model="notes"
                        placeholder="Notes - any relevant information not already covered"
                        class="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-1 focus:ring-[#1c2a4a]"></textarea>
                </div>
                <div>
                    <label for="terms" class="block mb-1 text-gray-700 text-sm">Terms</label>
                    <textarea id="terms" rows="3" v-model="terms"
                        placeholder="Terms and conditions - late fees, payment methods, delivery schedule"
                        class="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-1 focus:ring-[#1c2a4a]"></textarea>
                </div>
            </div>

            <div class="flex flex-col gap-4 md:w-1/2 max-w-xs">
                <div class="flex justify-between text-gray-700 text-sm">
                    <span>Subtotal</span>
                    <span class="text-gray-600">{{ subtotal.toFixed(2) }}</span>
                </div>
                <div class="flex items-center gap-2">
                    <label for="tax" class="text-gray-700 text-sm w-20 flex items-center">Tax</label>
                    <div class="flex items-center border border-gray-300 rounded-md overflow-hidden w-40">
                        <input id="tax" type="number" min="0" v-model.number="taxPercent" placeholder="%"
                            class="w-full border-none focus:ring-0 focus:outline-none text-gray-900 text-center px-2 py-2" />
                        <button type="button" @click="refreshTax"
                            class="border-l border-gray-300 rounded-r-md p-2 text-gray-600 hover:text-gray-900 hover:border-gray-900 transition"
                            aria-label="Refresh tax">
                            <RiLoopRightLine class="w-4 h-auto" />
                        </button>
                    </div>
                </div>
                <div class="flex gap-6 text-[#1c7a5f] font-semibold text-sm">
                    <button type="button" @click="toggleDiscount" class="hover:underline flex items-center gap-1">
                        <RiAddLargeLine class="w-4 h-auto" /> Discount
                    </button>
                    <button type="button" @click="toggleShipping" class="hover:underline flex items-center gap-1">
                        <RiAddLargeLine class="w-4 h-auto" /> Shipping
                    </button>
                </div>
                <div v-if="showDiscount" class="flex justify-between text-gray-700 text-sm">
                    <label for="discount" class="block">Discount</label>
                    <input id="discount" type="number" min="0" v-model.number="discount"
                        class="w-24 border border-gray-300 rounded-md px-3 py-1 text-gray-900 text-right focus:outline-none focus:ring-1 focus:ring-[#1c2a4a]" />
                </div>
                <div v-if="showShipping" class="flex justify-between text-gray-700 text-sm">
                    <label for="shipping" class="block">Shipping</label>
                    <input id="shipping" type="number" min="0" v-model.number="shipping"
                        class="w-24 border border-gray-300 rounded-md px-3 py-1 text-gray-900 text-right focus:outline-none focus:ring-1 focus:ring-[#1c2a4a]" />
                </div>
                <div class="flex justify-between text-gray-700 text-sm">
                    <span>Total</span>
                    <span class="text-gray-600">{{ total.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between items-center text-gray-700 text-sm">
                    <label for="amountPaid" class="block">Amount Paid</label>
                    <div class="flex items-center border border-gray-300 rounded-md overflow-hidden w-40">
                        <span class="px-3 text-gray-400 select-none">{{ currencies[currency] }}</span>
                        <input id="amountPaid" type="number" min="0" v-model.number="amountPaid"
                            class="w-full border-none focus:ring-0 focus:outline-none text-gray-900 px-2 py-2" />
                    </div>
                </div>
                <div class="flex justify-between text-gray-700 text-sm">
                    <span>Balance Due</span>
                    <span class="text-gray-600">{{ balanceDue.toFixed(2) }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { RiCloseLargeFill, RiAddLargeLine, RiLoopRightLine } from '@remixicon/vue';

export default {
    name: 'FormMiddle',
    data() {
        return {
            itemDetails: [
                {
                    description: '',
                    quantity: 1,
                    rate: 0,
                },
            ],
            currency: 'USD',
            currencies: {
                USD: '$',
                EUR: '€',
                GBP: '£',
                JPY: '¥',
                AUD: 'A$',
                CAD: 'C$',
                CHF: 'CHF',
                CNY: '¥',
                INR: '₹'
            },
            notes: "",
            terms: "",
            taxPercent: 0,
            discount: 0,
            shipping: 0,
            amountPaid: 0,
            showDiscount: false,
            showShipping: false,
        }
    },
    methods: {
        addLineItem() {
            this.itemDetails.push({ description: '', quantity: 1, rate: 0 });
        },
        removeLineItem(index) {
            if (this.itemDetails.length > 1) {
                this.itemDetails.splice(index, 1);
            }
        },
        toggleDiscount() {
            this.showDiscount = !this.showDiscount;
            if (!this.showDiscount) this.discount = 0;
        },
        toggleShipping() {
            this.showShipping = !this.showShipping;
            if (!this.showShipping) this.shipping = 0;
        },
        refreshTax() {
            this.taxPercent = 0;
        },
    },
    computed: {
        subtotal() {
            return this.itemDetails.reduce(
                (sum, item) => sum + item.quantity * item.rate,
                0
            );
        },
        total() {
            let totalVal = this.subtotal;
            if (this.taxPercent > 0) {
                totalVal += (this.taxPercent / 100) * this.subtotal;
            }
            if (this.showDiscount) {
                totalVal -= this.discount;
            }
            if (this.showShipping) {
                totalVal += this.shipping;
            }
            return totalVal < 0 ? 0 : totalVal;
        },
        balanceDue() {
            const bal = this.total - this.amountPaid;
            return bal < 0 ? 0 : bal;
        },
    },
    components: {
        RiCloseLargeFill,
        RiAddLargeLine,
        RiLoopRightLine
    }
}
</script>
