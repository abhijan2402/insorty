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
      return data.data;
    },
  });

  const { data: partners, isLoading: partnerLoaded } = useQuery({
    queryKey: ["partners"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getAllPartners",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  const { data: branches, isLoading: branchLoaded } = useQuery({
    queryKey: ["branches"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getAllBranches",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      // console.log(data);
      return data.data;
    },
  });

  const getPartyId = (name) => {
    if (!partyLoaded && parties.length > 0) {
      let party = parties.filter((item) => {
        if (item.partyName === name) {
          return item;
        }
      });
      if (party.length > 0) {
        return party[0]._id;
      } else {
        return null;
      }
    }
  };

  const getPartyName = (id) => {
    if (!partyLoaded && parties.length > 0) {
      let party = parties.filter((item) => {
        if (item._id === id) {
          return item;
        }
      });
      if (party.length > 0) {
        return party[0].partyName;
      } else {
        return null;
      }
    }
  };

  const getBranchName = (id) => {
    if (!branchLoaded && branches.length > 0) {
      const branch = branches.find((item) => item._id === id);

      if (!branch) {
        return null;
      }

      return branch.branchName;
    }
  };

  const getPartnerName = (id) => {
    if (!partnerLoaded && partners.length > 0) {
      const partner = partners.find((item) => item._id === id);
      if (!partner) {
        return null;
      }
      return partner.name;
    }
  };

  const getSpacificePartnerTranslation = (id) => {
    if (!partnerLoaded && partners.length > 0) {
      const transactions = partners.find((item) => item._id === id);
      if (!transactions) {
        return null;
      }
      return transactions.transactions;
    }
  };

  return {
    parties,
    partyLoaded,
    getPartyId,
    getPartyName,
    partners,
    partnerLoaded,
    branches,
    branchLoaded,
    getBranchName,
    getPartnerName,
    getSpacificePartnerTranslation,
  };
}

export default usePartyNames;
