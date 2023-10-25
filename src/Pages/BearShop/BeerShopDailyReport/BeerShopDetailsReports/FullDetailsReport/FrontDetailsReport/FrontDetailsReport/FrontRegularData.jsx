import React from 'react'

function FrontRegularData({ regularData, index,quan1,quan2,quan3,pageId,frontSet }) {
    const { pages, brandName } = regularData;
  let count = 0 

  const pegCount = (a,b,c)=>{
    return (((Number(a)*25) || 0) + ((Number(b)*12.5) || 0) + ((Number(c)*6) || 0))
  }

  const calPrice30 = (stock1, stock2, stock3, price1, price2, price3) => {
    const total =
      (Number(stock1) || 0) * (Number(price1) || 0) +
      (Number(stock2) || 0) * (Number(price2) || 0) +
      (Number(stock3) || 0) * (Number(price3) || 0);
     
    const totalStock = pegCount(stock1, stock2, stock3);

    return (Number(total / totalStock) || 0).toFixed(2);
  };

  const calAvg = (a,b,c,d) => {
    const totalStockRate = ((Number(a) || 0)*(Number(b) || 0)) + ((Number(c) || 0)*(Number(d)|| 0))
    return Number((totalStockRate/((Number(a) || 0)+(Number(c) || 0))) || 0).toFixed(2)
  }

  return (

    <>
    
    {pages.sort((a, b) => b.page.localeCompare(a.page)).map((page, index2) => {

const pg = pageId ? pageId : Array.from(frontSet)[0]

if (page.page === pg){
  
const quantityInML750 = page.entries.filter(
  (entry) => entry.quantityInML === quan1
);

const quantityInML375 = page.entries.filter(
  (entry) => entry.quantityInML === quan2
);

const quantityInML180 = page.entries.filter(
  (entry) => entry.quantityInML === quan3
);


const yog = Number(quantityInML750.map((item, index) => {
    return item.openingStock;
  })) + 
  pegCount(quantityInML750.map((item, index) => {
    return item.purchaseShop;
  }),quantityInML375.map((item, index) => {
    return item.purchaseShop;
  }),quantityInML180.map((item, index) => {
    return item.purchaseShop;
  })) + 
  pegCount(quantityInML750.map((item, index) => {
    return item.purchaseOutSide;
  }),quantityInML375.map((item, index) => {
    return item.purchaseOutSide;
  }),quantityInML180.map((item, index) => {
    return item.purchaseOutSide;
  })) + 
  pegCount(quantityInML750.map((item, index) => {
    return item.credits;
  }),quantityInML375.map((item, index) => {
    return item.credits;
  }),quantityInML180.map((item, index) => {
    return item.credits;
  })) - 
  pegCount(quantityInML750.map((item, index) => {
    return item.send;
  }),quantityInML375.map((item, index) => {
    return item.send;
  }),quantityInML180.map((item, index) => {
    return item.send;
  }))   



 

return (

    <tr>
                     <td className="tg-0lax">{index+1}</td>
            <td className="tg-0lax">{brandName}</td>

                    {/* ======== MRP Input ========= */}
                    <td className="tg-0lax">{quantityInML750.map((item, index) => {
              return Number(item?.averageRate?.$numberDecimal).toFixed(2);
            })}</td>
            <td className="tg-0lax">{quantityInML375.map((item, index) => {
              return Number(item?.averageRate?.$numberDecimal).toFixed(2);
            })}</td>
            <td className="tg-0lax">{quantityInML180.map((item, index) => {
              return Number(item?.averageRate?.$numberDecimal).toFixed(2);
            })}</td>
                    <td className="tg-0lax">{calAvg(pegCount(quantityInML750.map((item, index) => {
                return item.purchaseShop;
              }),quantityInML375.map((item, index) => {
                return item.purchaseShop;
              }),quantityInML180.map((item, index) => {
                return item.purchaseShop;
              })), calPrice30(quantityInML750.map((item, index) => {
                return item.purchaseShop;
              }),
              quantityInML375.map((item, index) => {
                return item.purchaseShop;
              }),
              quantityInML180.map((item, index) => {
                return item.purchaseShop;
              }),
              quantityInML750.map((item, index) => {
                return item.purchaseShopRate?.$numberDecimal;
              }),
              quantityInML375.map((item, index) => {
                return item.purchaseShopRate?.$numberDecimal;
              }),
              quantityInML180.map((item, index) => {
                return item.purchaseShopRate?.$numberDecimal;
              })
              ),
              pegCount(quantityInML750.map((item, index) => {
                return item.purchaseOutSide;
              }),quantityInML375.map((item, index) => {
                return item.purchaseOutSide;
              }),quantityInML180.map((item, index) => {
                return item.purchaseOutSide;
              })),
              calPrice30(quantityInML750.map((item, index) => {
                return item.purchaseOutSide;
              }),
              quantityInML375.map((item, index) => {
                return item.purchaseOutSide;
              }),
              quantityInML180.map((item, index) => {
                return item.purchaseOutSide;
              }),
              quantityInML750.map((item, index) => {
                return item.purchaseOutSideRate?.$numberDecimal;
              }),
              quantityInML375.map((item, index) => {
                return item.purchaseOutSideRate?.$numberDecimal;
              }),
              quantityInML180.map((item, index) => {
                return item.purchaseOutSideRate?.$numberDecimal;
              })
              )
              )}</td>


                    {/* ======== प्रारम्भिक स्टॉक ========= */}
                    <td className="tg-0lax">
              {quantityInML750.map((item, index) => {
                return item.openingStock;
              })}
            </td>
            {/* <td className="tg-0lax">
              {quantityInML375.map((item, index) => {
                return item.openingStock;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML180.map((item, index) => {
                return item.openingStock;
              })}
            </td>
                    <td className="tg-0lax">{pegCount(quantityInML750.map((item, index) => {
                return item.openingStock;
              }),quantityInML375.map((item, index) => {
                return item.openingStock;
              }),quantityInML180.map((item, index) => {
                return item.openingStock;
              }))}</td>  */}



                    <td className="tg-0lax">
              {quantityInML750.map((item, index) => {
                return item.purchaseShop;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML375.map((item, index) => {
                return item.purchaseShop;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML180.map((item, index) => {
                return item.purchaseShop;
              })}
            </td>
                   <td className="tg-0lax">{pegCount(quantityInML750.map((item, index) => {
                return item.purchaseShop;
              }),quantityInML375.map((item, index) => {
                return item.purchaseShop;
              }),quantityInML180.map((item, index) => {
                return item.purchaseShop;
              }))}</td> 
                    {/* ======== आमद (खरीद)-दु. ========= */}



                   <td className="tg-0lax">
              {quantityInML750.map((item, index) => {
                return item.purchaseShopRate?.$numberDecimal;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML375.map((item, index) => {
                return item.purchaseShopRate?.$numberDecimal;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML180.map((item, index) => {
                return item.purchaseShopRate?.$numberDecimal;
              })}
            </td>
            <td className="tg-0lax">{calPrice30(quantityInML750.map((item, index) => {
                return item.purchaseShop;
              }),
              quantityInML375.map((item, index) => {
                return item.purchaseShop;
              }),
              quantityInML180.map((item, index) => {
                return item.purchaseShop;
              }),
              quantityInML750.map((item, index) => {
                return item.purchaseShopRate?.$numberDecimal;
              }),
              quantityInML375.map((item, index) => {
                return item.purchaseShopRate?.$numberDecimal;
              }),
              quantityInML180.map((item, index) => {
                return item.purchaseShopRate?.$numberDecimal;
              })
              )}</td>



                    <td className="tg-0lax">
              {quantityInML750.map((item, index) => {
                return item.purchaseOutSide;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML375.map((item, index) => {
                return item.purchaseOutSide;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML180.map((item, index) => {
                return item.purchaseOutSide;
              })}
            </td>
            <td className="tg-0lax">{pegCount(quantityInML750.map((item, index) => {
                return item.purchaseOutSide;
              }),quantityInML375.map((item, index) => {
                return item.purchaseOutSide;
              }),quantityInML180.map((item, index) => {
                return item.purchaseOutSide;
              }))}</td> 



                    {/* ======== आमद (खरीद)-बा. ========= */}

                     <td className="tg-0lax">
              {quantityInML750.map((item, index) => {
                return item.purchaseOutSideRate?.$numberDecimal;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML375.map((item, index) => {
                return item.purchaseOutSideRate?.$numberDecimal;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML180.map((item, index) => {
                return item.purchaseOutSideRate?.$numberDecimal;
              })}
            </td>
                    <td className="tg-0lax">{calPrice30(quantityInML750.map((item, index) => {
                return item.purchaseOutSide;
              }),
              quantityInML375.map((item, index) => {
                return item.purchaseOutSide;
              }),
              quantityInML180.map((item, index) => {
                return item.purchaseOutSide;
              }),
              quantityInML750.map((item, index) => {
                return item.purchaseOutSideRate?.$numberDecimal;
              }),
              quantityInML375.map((item, index) => {
                return item.purchaseOutSideRate?.$numberDecimal;
              }),
              quantityInML180.map((item, index) => {
                return item.purchaseOutSideRate?.$numberDecimal;
              })
              )}</td>



                    <td className="tg-0lax">
              {quantityInML750.map((item, index) => {
                return item.credits;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML375.map((item, index) => {
                return item.credits;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML180.map((item, index) => {
                return item.credits;
              })}
            </td>
            <td className="tg-0lax">{pegCount(quantityInML750.map((item, index) => {
                return item.credits;
              }),quantityInML375.map((item, index) => {
                return item.credits;
              }),quantityInML180.map((item, index) => {
                return item.credits;
              }))}</td> 


                    {/* ======== भेजान ========= */}
                    <td className="tg-0lax">
              {quantityInML750.map((item, index) => {
                return item.send;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML375.map((item, index) => {
                return item.send;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML180.map((item, index) => {
                return item.send;
              })}
            </td>
            <td className="tg-0lax">{pegCount(quantityInML750.map((item, index) => {
                return item.send;
              }),quantityInML375.map((item, index) => {
                return item.send;
              }),quantityInML180.map((item, index) => {
                return item.send;
              }))}</td> 
                    {/* ======== योग/शेष ========= */}



                    <td className="tg-0lax">{yog}  </td>
                 
                    {/* ======== अन्तिम स्टॉक ========= */}
                    <td className="tg-0lax">{quantityInML750.length > 0
                ? quantityInML750.map((item, index) => {
                    return item.closingStock;
                  })
                : 0}</td>

                    <td className="tg-0lax">{yog - (quantityInML750.length > 0
              ? quantityInML750.map((item, index) => {
                  return item.closingStock;
                })
              : 0)}   </td>

              <td>{quantityInML750.length > 0
              ? quantityInML750.map((item, index) => {
                  return item.sellingRate.$numberDecimal;
                })
              : 0}</td>

                    <td className="tg-0lax">{(yog - (quantityInML750.length > 0
              ? quantityInML750.map((item, index) => {
                  return item.closingStock;
                })
              : 0)) * (quantityInML750.length > 0
              ? quantityInML750.map((item, index) => {
                  return item.sellingRate.$numberDecimal;
                })
              : 0)}   </td>
                    {/* ============= कुल योग ================ */}
                    {/* <td className="tg-0lax">3</td> */}
                  </tr>
                   );}
                })}
              </>
  )
}

export default FrontRegularData