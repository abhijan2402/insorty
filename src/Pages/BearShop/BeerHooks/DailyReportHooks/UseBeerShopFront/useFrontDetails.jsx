import React from 'react'
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';

function useFrontDetails(date) {
  const token = localStorage.getItem('token')

  const { data: FrontPageRegularData, isLoading,refetch: frontRegularrefetch } = useQuery({
    queryKey: ["FrontPageRegularData"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/shop/getFrontPageRegularSize?from=${moment(date).format('DD MMMM YYYY')}&to=${moment(date).format('DD MMMM YYYY')}&page=0&pagesize=200`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      console.log(data.data,"regular")
      console.log(moment(date).format('DD MMMM YYYY'))
      return data.data;
    },
  });

  const { data: FrontPageExceptionalData, isLoading: isLoading2, refetch: frontExceptrefetch } = useQuery({
    queryKey: ["FrontPageExceptionalData"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/shop/getFrontPageExceptionalSize?from=${moment(date).format('DD MMMM YYYY')}&to=${moment(date).format('DD MMMM YYYY')}&page=0&pagesize=200`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      console.log(data.data,"except")

      return data.data;
    },
  });
//   const { data: BeerPageRegularData, isLoading: BeerisLoading } = useQuery({
//     queryKey: ["BeerPageRegularData"],
//     queryFn: async () => {
//       const res = await fetch(
//         `${process.env.REACT_APP_API_URL}/shop/getBackPageReportRegularSize?from=${moment(date).format('DD MMMM YYYY')}&to=${moment(date).format('DD MMMM YYYY')}&page=0&pagesize=200`,
//         {
//           method: "GET",
//           headers: { "Content-Type": "application/json", cookie_token: token },
//         }
//       );
//       const data = await res.json();
//       console.log(data.data,"regular")
//       console.log(moment(date).format('DD MMMM YYYY'))
//       return data.data;
//     },
//   });

//   const { data: BeerPageExceptionalData, isLoading: BeerisLoading2 } = useQuery({
//     queryKey: ["BeerPageExceptionalData"],
//     queryFn: async () => {
//       const res = await fetch(
//         `${process.env.REACT_APP_API_URL}/shop/getBackPageReportExceptionalSize?from=${moment(date).format('DD MMMM YYYY')}&to=${moment(date).format('DD MMMM YYYY')}&page=0&pagesize=200`,
//         {
//           method: "GET",
//           headers: { "Content-Type": "application/json", cookie_token: token },
//         }
//       );
//       const data = await res.json();
//       console.log(data.data,"except")

//       return data.data;
//     },
//   });


  const { data: FrontPage, isLoading: FrontisLoading2,refetch: frontPagerefetch } = useQuery({
    queryKey: ["FrontPage"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/shop/getBarFrontPageData?from=${moment(date).format('DD MMMM YYYY')}&to=${moment(date).add(1, 'day').format('DD MMMM YYYY')}&page=0&pagesize=200`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      console.log(data.data,"front")

      return data.data;
    },
  });




  return{
      FrontPageExceptionalData,
      isLoading2,
      FrontPageRegularData,
      isLoading,
      FrontPage,
      FrontisLoading2,
      frontPagerefetch,
      frontRegularrefetch,
      frontExceptrefetch
  }
}



export default useFrontDetails