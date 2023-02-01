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
    if (!partyLoaded && parties.length > 0) {
      let party = parties.filter((item) => {
        if (item.partyName === name) {
          return item;
        }
      })
      if (party.length > 0) {
        return party[0]._id;
      } else {
        return nulll;
      }

    }
  }


  const getPartyName = (id) => {

    if (!partyLoaded && parties.length > 0) {
      let party = parties.filter((item) => {
        if (item._id === id) {
          return item;
        }
      })
      if (party.length > 0) {
        return party[0].partyName;
      } else {
        return null;
      }

    }
  }


  return {
    parties,
    partyLoaded,
    getPartyId,
    getPartyName
  };
}

export default usePartyNames;
