
import { useQuery } from "@tanstack/react-query";

function useGetDailyReport() {
  const token = localStorage.getItem("token");

  const { data: RMLData, isLoading: RMLLoaded } = useQuery({
    queryKey: ["RMLData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getBackPageRMLData",
        {
          method: "GET",
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
  } = useQuery({
    queryKey: ["PurchaseOutsideData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getPurchaseOutsideData",
        {
          method: "GET",
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
          method: "GET",
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
  } = useQuery({
    queryKey: ["BorrowedCashReturnData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getBorrowedCashReturnData",
        {
          method: "GET",
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
  } = useQuery({
    queryKey: ["PurchaseBorrowData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getPurchaseBorrowData",
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });
  const { data: SendData, isLoading: SendLoaded } = useQuery({
    queryKey: ["SendData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getSendData",
        {
          method: "GET",
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
   
  } = useQuery({
    queryKey: ["BorrowedData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getBorrowedData",
        {
          method: "GET",
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
  } = useQuery({
    queryKey: ["FinalReportData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getFinalReportData",
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });
  const {
    data: FrontPageData,
    isLoading: FrontPageDataLoaded,
  } = useQuery({
    queryKey: ["FrontPageData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getFrontPageData",
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  const { data: BackPageReportExceptionalSize,   isLoading: ExceptionalLoading } = useQuery({
    queryKey: ["BackPageReportExceptionalSize"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getBackPageReportExceptionalSize",
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  const { data: BackPageReportRegularSize, isLoading: RegularLoading } = useQuery({
    queryKey: ["BackPageReportRegularSize"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getBackPageReportRegularSize",
        {
          method: "GET",
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
    ExceptionalLoading,
    RegularLoading
  };
}

export default useGetDailyReport;
