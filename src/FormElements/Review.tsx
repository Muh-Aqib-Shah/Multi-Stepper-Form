import FormFields from "./interface/formInterface"

export const Review: React.FC<FormFields>  = ({username,card_name,address,card_number,set_form_page}) => {
    return(
        <div className="review-cont">
            <div className="review-page">
                <section className="review-text review-username-txt">Username: </section>
                <section className="review-value review-username-val">{username}</section>
                <section className="review-text review-address-txt">Address: </section>
                <section className="review-value review-addrs-val">{address}</section>
                <section className="review-text review-crd-name-txt">Card Holder Name: </section>
                <section className="review-value review-crd-name-val">{card_name}</section>
                <section className="review-text review-crd-num-txt">Card Number</section>
                <section className="review-value review-crd-num-val">{card_number}</section>

            <div className="form-btns-cont-grid ">
                <input type="button" className="form-prev-btn" value="< Prev" onClick={()=> set_form_page(1)} />
                <input type="button" className="sbmt-btn" value="Proceed >" onClick={()=> set_form_page(3)}/>
            </div>

            </div>
        </div>
    )
}