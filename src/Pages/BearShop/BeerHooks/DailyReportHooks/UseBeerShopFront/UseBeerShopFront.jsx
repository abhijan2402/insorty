import React from 'react';
import { useState } from 'react';

const UseBeerShopFront = () => {
    const firstFormDataTemplate = {
        brandName: '',
        OpeningStock750: "",
        OpeningStock330: "",
        OpeningStock180: "",
        OpeningStock60: "",
        OpeningStock30: "",

        inflowShop750: "",
        inflowShop330: "",
        inflowShop180: "",
        inflowShop60: "",
        inflowShop30: "",

        buyeRateShop750: "",
        buyeRateShop330: "",
        buyeRateShop180: "",
        buyeRateShop60: "",
        buyeRateShop30: "",

        incomePurchase750: "",
        incomePurchase330: "",
        incomePurchase180: "",
        incomePurchase60: "",
        incomePurchase30: "",

        buyeRateOut750: "",
        buyeRateOut330: "",
        buyeRateOut180: "",
        buyeRateOut60: "",
        buyeRateOut30: "",

        send750: "",
        send330: "",
        send180: "",
        send60: "",
        send30: "",

        sumRemaining750: "",
        sumRemaining330: "",
        sumRemaining180: "",
        sumRemaining60: "",
        sumRemaining30: "",

        closingStock750: "",
        closingStock330: "",
        closingStock180: "",
        closingStock60: "",
        closingStock30: "",

        salse750: "",
        salse330: "",
        salse180: "",
        salse60: "",
        salse30: "",

        total750: "",
        total330: "",
        total180: "",
        total60: "",
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
        openingStock330: '',
        openingStock180: '',

        infllowPuchase650: '',
        infllowPuchase330: '',
        infllowPuchase180: '',

        buyeShop650: '',
        buyeShop330: '',
        buyeShop180: '',

        incomePurchesOut650: "",
        incomePurchesOut330: "",
        incomePurchesOut180: "",

        buyeRateOut750: "",
        buyeRateOut330: "",
        buyeRateOut180: "",

        infllowCradit750: "",
        infllowCradit330: "",
        infllowCradit180: "",

        send650: "",
        send330: "",
        send180: "",

        sumRemainder650: "",
        sumRemainder330: "",
        sumRemainder180: "",

        closingStock650: "",
        closingStock330: "",
        closingStock180: "",

        sals650: "",
        sals330: "",
        sals180: "",

        total650: "",
        total330: "",
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