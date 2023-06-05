import moment from "moment";
import { useQuery } from "@tanstack/react-query";

function useGetDailyReport(date) {
  const token = localStorage.getItem("token");

  const { data: RMLData, isLoading: RMLLoaded } = useQuery({
    queryKey: ["RMLData"],
    queryFn: async () => {
      const res = await fetch(
        `https://insorty-api.onrender.com/shop/getBackPageRMLData?from=${moment(date).format('DD MMMM YYYY')}&to=${moment(date).format('DD MMMM YYYY')}&page=0&pagesize=200`,
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
        `https://insorty-api.onrender.com/shop/getPurchaseOutsideData?from=${moment(date).format('DD MMMM YYYY')}&to=${moment(date).format('DD MMMM YYYY')}&page=0&pagesize=200`,
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
        `https://insorty-api.onrender.com/shop/getTotalExpensesData?from=${moment(date).format('DD MMMM YYYY')}&to=${moment(date).format('DD MMMM YYYY')}&page=0&pagesize=200`,
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
        `https://insorty-api.onrender.com/shop/getBorrowedCashReturnData?from=${moment(date).format('DD MMMM YYYY')}&to=${moment(date).format('DD MMMM YYYY')}&page=0&pagesize=200`,
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
        `https://insorty-api.onrender.com/shop/getPurchaseBorrowData?from=${moment(date).format('DD MMMM YYYY')}&to=${moment(date).format('DD MMMM YYYY')}&page=0&pagesize=200`,
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
        `https://insorty-api.onrender.com/shop/getSendData?from=${moment(date).format('DD MMMM YYYY')}&to=${moment(date).format('DD MMMM YYYY')}&page=0&pagesize=200`,
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
        `https://insorty-api.onrender.com/shop/getBorrowedData?from=${moment(date).format('DD MMMM YYYY')}&to=${moment(date).format('DD MMMM YYYY')}&page=0&pagesize=200`,
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
        `https://insorty-api.onrender.com/shop/getFinalReportData?from=${moment(date).format('DD MMMM YYYY')}&to=${moment(date).format('DD MMMM YYYY')}&page=0&pagesize=200`,
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
        `https://insorty-api.onrender.com/shop/getFrontPageData?from=${moment(date).format('DD MMMM YYYY')}&to=${moment(date).format('DD MMMM YYYY')}&page=0&pagesize=200`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  const { data: BackPageReportExceptionalSize,   isLoading: ExceptionalLoading,refetch: ExceptionalRefetch } = useQuery({
    queryKey: ["BackPageReportExceptionalSize"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/shop/getBackPageReportExceptionalSize?from=${moment(date).format('DD MMMM YYYY')}&to=${moment(date).format('DD MMMM YYYY')}&page=0&pagesize=200`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  const { data: BackPageReportRegularSize, isLoading: RegularLoading, refetch: RegularRefetch } = useQuery({
    queryKey: ["BackPageReportRegularSize"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/shop/getBackPageReportRegularSize?from=${moment(date).format('DD MMMM YYYY')}&to=${moment(date).format('DD MMMM YYYY')}&page=0&pagesize=200`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  const { data: BackPageData, isLoading: BackPageLoading, refetch: backPageRefetch } = useQuery({
    queryKey: ["BackPageData"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/shop/getBackPageData?from=${moment(date).format('DD MMMM YYYY')}&to=${moment(date).add(1,'day').format('DD MMMM YYYY')}&page=0&pagesize=200`,
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
    RegularLoading,
    backPageRefetch,
    BackPageLoading,
    BackPageData,
    RegularRefetch,
    ExceptionalRefetch

  };
}

export default useGetDailyReport;
