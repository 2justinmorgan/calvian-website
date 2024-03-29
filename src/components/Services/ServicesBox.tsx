import axios from "axios";
import React from "react";
import OfferList from "./OfferList";

interface ServicesBoxProps {
  price: any;
  purchaseLink: string;
  packageName: string;
  btn: string;
  popular?: boolean;
  subtitle: string;
  children: React.ReactNode;
}

const ServicesBox = ({ product }) => {
  const {} = product;

  // POST request
  const handleSubscription = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "/api/payment",
      {
        priceId: product.id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    window.location.assign(data);
  };

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div
        className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14"
        data-wow-delay=".1s"
      >
        {product.nickname === "Premium" && (
          <p className="absolute right-[-50px] top-[60px] inline-block -rotate-90 rounded-bl-md rounded-tl-md bg-blue-900 px-5 py-2 text-base font-medium text-white">
            Recommended
          </p>
        )}
        <span className="mb-5 block text-xl font-medium text-dark dark:text-white">
          {product.nickname}
        </span>
        <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
          <span className="text-xl font-medium">$ </span>
          <span className="-ml-1 -tracking-[2px]">
            {(product.unit_amount / 100).toLocaleString("en-US", {
              currency: "USD",
            })}
          </span>
          <span className="text-base font-normal text-body-color dark:text-dark-6">
            {" "}
            Per Month
          </span>
        </h2>

        <div className="mb-[50px]">
          <h3 className="mb-5 text-lg font-medium text-dark dark:text-white">
            Features
          </h3>
          <div className="mb-10">
            {product.nickname === "Basic" && (
              <>
                <OfferList text="1 User" />
                <OfferList text="All UI components" />
                <OfferList text="Lifetime access" />
                <OfferList text="Free updates" />
                <OfferList text="Use on 1 (one) project" />
                <OfferList text="3 Months support" />
              </>
            )}
            {product.nickname === "Premium" && (
              <>
                <OfferList text="10 Users" />
                <OfferList text="All UI components" />
                <OfferList text="Lifetime access" />
                <OfferList text="Free updates" />
                <OfferList text="Use on 20 projects" />
                <OfferList text="3 Years support" />
              </>
            )}
            {product.nickname === "Business" && (
              <>
                <OfferList text="Unlimited Users" />
                <OfferList text="All UI components" />
                <OfferList text="Lifetime access" />
                <OfferList text="Free updates" />
                <OfferList text="Use on unlimited project" />
                <OfferList text="Lifetime support" />
              </>
            )}
          </div>
        </div>
        <div className="w-full">
          <button
            onClick={handleSubscription}
            className="inline-block rounded-md bg-blue-900 px-7 py-3 text-center text-base font-medium text-white transition duration-300 hover:bg-blue-900/90"
          >
            Purchase Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesBox;
