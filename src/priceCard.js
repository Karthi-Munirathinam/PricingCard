import React from 'react';


export default function PriceCard(props) {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{props.Data.packageName}</h5>
                    <h6 className="card-price text-center">{props.Data.price}<span className="period">/{props.Data.period}</span></h6>
                    <hr />
                    <ul className="fa-ul">
                        {
                            props.Data.features.map((ele, index) => {
                                return <li key={`A${index}`} className={ele.isEnabled ? '' : 'text-muted'}><span className="fa-li"><i className={`fas ${ele.isEnabled ? 'fa-check' : 'fa-times'}`}></i></span>{props.Data.packageName === "PRO" && ele.isunlimited ? <strong>Unlimited </strong> : ''}{ele.isBold ? <strong>{ele.name}</strong> : <span>{ele.name}</span>}</li>
                            })
                        }

                    </ul>
                    <div className="d-grid">
                        <button className="btn btn-primary text-uppercase">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
