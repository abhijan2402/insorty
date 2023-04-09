 {
    path: "/user/bearshop",
    element: <BearShopLayout />,
    children: [
      {
        path: "/user/bearshop/dailyreport",
        element: <BearShopDailyReport />,
      },

      {
        path: "/user/bearshop/dailyreport/front",
        element: <BeerShopFrontDailyReport />,
      },
      {
        path: "/user/bearshop/dailyreport/back",
        element: <BeerShopBackDailyReport />,
      },

      {
        path: "/user/bearshop/branch",
        element: <BearShopBranch />,
      },
    
      {
        path: "/user/bearshop/commisionRoute",
        element: <CommsionRoutes />,
      },

      {
        path: "/user/bearshop/commisson",
        element: <Commision />,
      },
      {
        path: "/user/bearshop/kharcha",
        element: <Kharcha />,
      },
      {
        path: "/user/bearshop/partnersMarge",
        element: <PartnersMarge />,
      },
      {
        path: "/user/bearshop/fut",
        element: <Fut />,
      },
      {
        path: "/user/bearshop/begar",
        element: <Burger />,
      },
      {
        path: "/user/bearshop/monthly",
        element: <Monthly />,
      },
      {
        path: "/user/bearshop/penalty",
        element: <Penalty />,
      },
      {
        path: "/user/bearshop/others",
        element: <Others />,
      },
      {
        path: "/user/bearshop/borrow",
        element: <BearShopBorrow />,
      },
      {
        path: "/user/bearshop/finalreport",
        element: <BearShopFinalReport />,
      },
       {
        path: "/user/bearshop/partnersMarge",
        element: <PartnersMarge2 />,
      },
      {
        path: "/user/bearshop/partners",
        element: <Partnar />,
      },
      {
        path: "/user/bearshop/sendFormat",
        element: <SendFormat />
      },

      {
        path: "/user/bearshop/payments",
        element: <BearShopPayments />,
      },
      {
        path: "/user/bearshop/allItems",
        element: <AddItemsBear />,
      },
      {
        path: "/user/bearshop/branchname",
        element: <BranchNameData />,
      },
      {
        path: "/user/bearshop/partyname",
        element: <PartyName />,
      },
      {
        path: "/user/bearshop/salary",
        element: <BearShopSalary />,
      },

      {
        path: "/user/bearshop/salary/from/:employeeId",
        loader: ({ params }) =>
          fetch(`https://insorty-api.onrender.com/shop/getEmployeeSalaryData`, {
            method: "POST",
            body: JSON.stringify({
              employeeId: params.employeeId,
            }),
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
          }),
        element: <BearShopSalaryForm />,
      },
      {
        path: "/user/bearshop/outbill",
        element: <BearShopOutbill />,
      },
      {
        path: "/user/bearshop/selfbill",
        element: <BearShopSelfBill />,
      },
      {
        path: "/user/bearshop/extra",
        element: <BearShopExtra />,
      },
      {
        path: "/user/bearshop/maininvestment",
        element: <BearShopMainInvestment />,
      },
      {
        path: "/user/bearshop/englishbear",
        element: <BearShopEnglishBear />,
      },
      {
        path: "/user/bearshop/stocklanding",
        element: <BearShopStockLanding />,
      },
    ],
  },