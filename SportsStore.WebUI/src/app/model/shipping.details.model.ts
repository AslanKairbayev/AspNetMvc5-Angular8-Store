export class ShippingDetails {
    constructor(
        public Name?: string,
        public Line1?: string,
        public Line2?: string,
        public Line3?: string,
        public City?: string,
        public State?: string,
        public Zip?: string,
        public Country?: string,
        public GiftWrap?: boolean
    ) { }
}