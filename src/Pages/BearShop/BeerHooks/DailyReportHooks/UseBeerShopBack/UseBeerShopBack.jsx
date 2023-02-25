import React from 'react';
import { useState } from 'react';

const UseBeerShopBack = () => {
    const commisonDataTemp = {
        partyName: "",
        brandName: "",
        theNumber: "",
        quantity: "",
        rate: "",
        totalData: "",
        Reason: "",
    }

    const [comissonData, setComissonData] = useState([commisonDataTemp])

    const addOneData = () => {
        setComissonData([...comissonData, commisonDataTemp])
    }

    const addFiveData = () => {
        setComissonData([...comissonData, commisonDataTemp, commisonDataTemp, commisonDataTemp, commisonDataTemp, commisonDataTemp])
    }

    const handelCommissonOnChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...comissonData];
        list[index][name] = value;
        setComissonData(list);
    }

    const handelCommisson = (e, index) => {
        const { name, value } = e.target;
        const list = [...comissonData];
        list[index][name] = value;
        setComissonData(list);
    }

    // back landed data 

    const backLandedDataTemp = {
        partyName: "",
        brandName: "",
        rakom: "",
        size: "",
        sizeMl: "",
        comment: ""
    }
    const [backLandedData, setBackLandedData] = useState([backLandedDataTemp])
    const addOneBackLand = () => {
        setBackLandedData([...backLandedData, backLandedDataTemp])
    }
    const addFivebackLand = () => {
        setBackLandedData([...backLandedData, backLandedDataTemp, backLandedDataTemp, backLandedDataTemp, backLandedDataTemp, backLandedDataTemp])
    }
    const onChangeBackLand = (e, index) => {
        const { name, value } = e.target;
        const list = [...backLandedData];
        list[index][name] = value;
        setBackLandedData(list);
    }

    //========================== third form =========================

    const thirdFormTemp = {
        reason: "",
        rakom: "",
        comment: ""
    }
    const [thirdFormData, setThirdFormData] = useState([thirdFormTemp])
    const addOneThirdForm = () => {
        setThirdFormData([...thirdFormData, thirdFormTemp])
    }
    const addFiveThirdForm = () => {
        setThirdFormData([...thirdFormData, thirdFormTemp, thirdFormTemp, thirdFormTemp, thirdFormTemp, thirdFormTemp])
    }
    const fistFormAddOne = () => {
        addOneData()
        addOneBackLand()
        addOneThirdForm()
    }
    const firstFormAddFive = () => {
        addFiveData()
        addFivebackLand()
        addFiveThirdForm()
    }

    // ========================= fouth form =========================
    const fouthFormDataTemp = {
        partyName: "",
        partnerName: "",
        amount: 0,
        comment: ""
    }

    const [fourthFormState, setFouthFormState] = useState([fouthFormDataTemp])

    const addOneFourthForm = () => {
        setFouthFormState([...fourthFormState, fouthFormDataTemp])
    }

    const addFiveFouthForm = () => {
        setFouthFormState([...fourthFormState, fouthFormDataTemp, fouthFormDataTemp, fouthFormDataTemp, fouthFormDataTemp, fouthFormDataTemp])
    }

    const handelFouthFormOnChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...fourthFormState];
        list[index][name] = value;
        setFouthFormState(list);
    }

    // ========================= fivth form =========================

    const fivthFormDataTemp = {
        resone: "",
        rakam: "",
        comment: ""
    }

    const [fivthFormState, setFivthFormState] = useState([fivthFormDataTemp])

    const addFiveFivthForm = () => {
        setFivthFormState([...fivthFormState, fivthFormDataTemp, fivthFormDataTemp, fivthFormDataTemp, fivthFormDataTemp, fivthFormDataTemp])
    }

    const addOneFivethForm = () => {
        setFivthFormState([...fivthFormState, fivthFormDataTemp])
    }

    // ========================= sixth form =========================

    const sixthFomeDataTemp = {
        theDate: '',
        price: 0,
        details: ""
    }

    const [sixthFormState, setSixthFormState] = useState([sixthFomeDataTemp])
    
    const addOneSixthForm = () => {
        setSixthFormState([...sixthFormState, sixthFomeDataTemp])
    }

    const addFiveSixthForm = () => {
        setSixthFormState([...sixthFormState, sixthFomeDataTemp, sixthFomeDataTemp, sixthFomeDataTemp, sixthFomeDataTemp, sixthFomeDataTemp,])
    }




    const addOneSecondForm = () => {
        addOneFourthForm()
        addOneFivethForm()
        addOneSixthForm()

    }

    const addFiveSecondForm = () => {
        addFiveFouthForm()
        addFiveFivthForm()
        addFiveSixthForm()
    }



    return {
        comissonData,
        backLandedData,
        thirdFormData,
        addOneData,
        addOneBackLand,
        addFiveThirdForm,
        addOneThirdForm,
        firstFormAddFive,
        fistFormAddOne,
        fourthFormState,
        addOneSecondForm,
        addFiveSecondForm,
        fivthFormState,
        sixthFormState

    };
};

export default UseBeerShopBack;