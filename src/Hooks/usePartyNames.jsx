import { useQuery } from "@tanstack/react-query";

function usePartyNames() {

  const token = localStorage.getItem("token");

  const { data: parties, isLoading: partyLoaded } = useQuery({
    queryKey: ["parties"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getAllParties",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      console.log(data.data);
      return data.data;
    },
  });

  const getPartyId = (name) => {
    let party = parties.filter((item) => {
      if (item.partyName === name) {
        return item;
      }
      return null;



    const token = localStorage.getItem("token");


    const { data: parties, isLoading: partyLoaded } = useQuery({
        queryKey: ["parties"],
        queryFn: async () => {
            const res = await fetch(
                "https://insorty-api.onrender.com/shop/getAllParties",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json", cookie_token: token },
                }
            );
            const data = await res.json();
            // console.log(data.data);
            return data.data;
        },

    });

    if (party.length > 0) {
      return party[0]._id;
    } else {
      return null;
    }
  };

  return {
    parties,
    partyLoaded,
    getPartyId,
  };
}

export default usePartyNames;
