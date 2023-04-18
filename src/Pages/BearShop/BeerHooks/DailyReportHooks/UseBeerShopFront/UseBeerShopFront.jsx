import React from 'react';
import { useState } from 'react';

const UseBeerShopFront = () => {
    const firstFormDataTemplate = {
        brandName: '',
        OpeningStock750: "",
        OpeningStock375: "",
        OpeningStock180: "",
        OpeningStock30: "",

        inflowShop750: "",
        inflowShop375: "",
        inflowShop180: "",
        inflowShop30: "",

        buyeRateShop750: "",
        buyeRateShop375: "",
        buyeRateShop180: "",
        buyeRateShop30: "",

        incomePurchase750: "",
        incomePurchase375: "",
        incomePurchase180: "",
        incomePurchase30: "",

        buyeRateOut750: "",
        buyeRateOut375: "",
        buyeRateOut180: "",
        buyeRateOut30: "",

        send750: "",
        send375: "",
        send180: "",
        send30: "",

        sumRemaining750: "",
        sumRemaining375: "",
        sumRemaining180: "",
        sumRemaining30: "",

        closingStock750: "",
        closingStock375: "",
        closingStock180: "",
        closingStock30: "",

        salse750: "",
        salse375: "",
        salse180: "",
        salse30: "",

        total750: "",
        total375: "",
        total180: "",
        total30: "",

        grandTotal: "",

    }

    const [beerShopFrontFrist, setBeerShopFrontFrist] = useState([firstFormDataTemplate]);

    const fristFormOnChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...beerShopFrontFrist];
        list[index][name] = value;
        setBeerShopFrontFrist(list);
    }

    const fristFormAddOne = () => {
        setBeerShopFrontFrist([...beerShopFrontFrist, firstFormDataTemplate]);
    }

    const fristFormAddFive = () => {
        setBeerShopFrontFrist([...beerShopFrontFrist, firstFormDataTemplate, firstFormDataTemplate, firstFormDataTemplate, firstFormDataTemplate, firstFormDataTemplate]);
    }

    const handelFristFormSubmit = () => {
        console.log(beerShopFrontFrist);
    }

    // ==================================================== Second Form ====================================================

    const beerBarSecondFormTamp = {
        BrandName: '',
        openingStock650: '',
        openingStock375: '',
        openingStock180: '',

        infllowPuchase650: '',
        infllowPuchase375: '',
        infllowPuchase180: '',

        buyeShop650: '',
        buyeShop375: '',
        buyeShop180: '',

        incomePurchesOut650: "",
        incomePurchesOut375: "",
        incomePurchesOut180: "",

        buyeRateOut750: "",
        buyeRateOut375: "",
        buyeRateOut180: "",

        infllowCradit750: "",
        infllowCradit375: "",
        infllowCradit180: "",

        send650: "",
        send375: "",
        send180: "",

        sumRemainder650: "",
        sumRemainder375: "",
        sumRemainder180: "",

        closingStock650: "",
        closingStock375: "",
        closingStock180: "",

        sals650: "",
        sals375: "",
        sals180: "",

        total650: "",
        total375: "",
        total180: "",

        Amount: "",
    }
    const [beerShopFrontSecond, setBeerShopFrontSecond] = useState([beerBarSecondFormTamp]);

    const secondFormOnChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...beerShopFrontSecond];
        list[index][name] = value;
        setBeerShopFrontSecond(list);
    }

    const secondFormAddOne = () => {
        setBeerShopFrontSecond([...beerShopFrontSecond, beerBarSecondFormTamp]);
    }

    const secondFormAddFive = () => {
        setBeerShopFrontSecond([...beerShopFrontSecond, beerBarSecondFormTamp, beerBarSecondFormTamp, beerBarSecondFormTamp, beerBarSecondFormTamp, beerBarSecondFormTamp]);
    }

    // ==================================================== Third Form ====================================================
    const beerBarThirdFormTamp = {
        description: "",
        buyingPrice: "",
        OpeningStock: "",
        infllow: "",
        sum: "",
        closingStock: "",
        sales: "",
        rates: "",
        sumreminder: "",
    }


    const [beerShopFrontThird, setBeerShopFrontThird] = useState([beerBarThirdFormTamp]);

    const thirdFormOnChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...beerShopFrontThird];
        list[index][name] = value;
        setBeerShopFrontThird(list);
    }


    const thirdFormAddOne = () => {
        setBeerShopFrontThird([...beerShopFrontThird, beerBarThirdFormTamp]);
    }

    const thirdFormAddFive = () => {
        setBeerShopFrontThird([...beerShopFrontThird, beerBarThirdFormTamp, beerBarThirdFormTamp, beerBarThirdFormTamp, beerBarThirdFormTamp, beerBarThirdFormTamp]);
    }

    const handelThirdFormSubmit = () => {
        console.log(beerShopFrontThird);
    }


    const addOne = () => {
        thirdFormAddOne()
        secondFormAddOne()
    }


    return {
        handelFristFormSubmit,
        fristFormAddOne,
        fristFormAddFive,
        fristFormOnChange,
        beerShopFrontFrist,
        beerShopFrontSecond,
        beerShopFrontThird,
        addOne,

    }

};

export default UseBeerShopFront;