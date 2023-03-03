import React from "react";
import { useQuery } from "@tanstack/react-query";

function useGetDailyReport() {
  const token = localStorage.getItem("token");

  const { data: RMLData, isLoading: RMLLoaded, RMLrefetch } = useQuery({
    queryKey: ["RMLData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getBackPageRMLData",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  const {
    data: PurchaseOutsideData,
    isLoading: PurchaseOutsideLoaded,
    PurchaseOutsideRefetch,
  } = useQuery({
    queryKey: ["PurchaseOutsideData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getPurchaseOutsideData",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });
  const { data: TotalExpensesData, isLoading: TotalExpensesLoaded } = useQuery({
    queryKey: ["TotalExpensesData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getTotalExpensesData",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });
  const {
    data: BorrowedCashReturnData,
    isLoading: BorrowedCashReturnLoaded,
    BorrowedCashReturnRefetch,
  } = useQuery({
    queryKey: ["BorrowedCashReturnData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getBorrowedCashReturnData",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });
  const {
    data: PurchaseBorrowData,
    isLoading: PurchaseBorrowLoaded,
    PurchaseBorrowRefetch,
  } = useQuery({
    queryKey: ["PurchaseBorrowData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getPurchaseBorrowData",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });
  const { data: SendData, isLoading: SendLoaded, SendRefetch } = useQuery({
    queryKey: ["SendData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getSendData",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });
  const {
    data: BorrowedData,
    isLoading: BorrowedDataLoaded,
    BorrowedDataRefetch,
  } = useQuery({
    queryKey: ["BorrowedData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getBorrowedData",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });
  const {
    data: FinalReportData,
    isLoading: FinalReportDataLoaded,
    FinalReportDataRefetch,
  } = useQuery({
    queryKey: ["FinalReportData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getFinalReportData",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      // console.log(data.data)
      return data.data;
    },
  });
  const {
    data: FrontPageData,
    isLoading: FrontPageDataLoaded,
    FrontPageDataRefetch,
  } = useQuery({
    queryKey: ["FrontPageData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getFrontPageData",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      // console.log(data.data)
      return data.data;
    },
  });

  const { data: BackPageReportExceptionalSize } = useQuery({
    queryKey: ["BackPageReportExceptionalSize"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getBackPageReportExceptionalSize",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  const { data: BackPageReportRegularSize } = useQuery({
    queryKey: ["BackPageReportRegularSize"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getBackPageReportRegularSize",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  return {
    RMLData,
    RMLLoaded,
    PurchaseOutsideData,
    PurchaseOutsideLoaded,
    TotalExpensesData,
    TotalExpensesLoaded,
    BorrowedCashReturnData,
    BorrowedCashReturnLoaded,
    PurchaseBorrowData,
    PurchaseBorrowLoaded,
    SendData,
    SendLoaded,
    BorrowedData,
    BorrowedDataLoaded,
    FinalReportData,
    FinalReportDataLoaded,
    FrontPageData,
    FrontPageDataLoaded,
    BackPageReportExceptionalSize,
    BackPageReportRegularSize,
  };
}

export default useGetDailyReport;
