import jwtDecode from "jwt-decode";
import React from "react";

const RegularData = ({ regularData, index,quan1,quan2,quan3,pageId,frontSet,pgNo }) => {
  const { pages, brandName } = regularData;
  const token = localStorage.getItem('token')
  const shopType = jwtDecode(token).shopType
  let count = 0 

  // get all quantityInML 750 ml data form entries arry
  if(shopType==="SHOP"){
    return (
      <>
  
        {
        pages.sort((a, b) => a.page.localeCompare(b.page)).map((page, index2) => {
  
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
  
  
          return (
            <tr>
              <th className="tg-0lax">{index+1}</th>
              <td className="tg-0lax">{brandName}</td>
  
             
              <td className="tg-0lax">{quantityInML750.map((item, index) => {
                return Number(item?.averageRate?.$numberDecimal).toFixed(2);
              })}</td>
              <td className="tg-0lax">{quantityInML375.map((item, index) => {
                return Number(item?.averageRate?.$numberDecimal).toFixed(2);
              })}</td>
              <td className="tg-0lax">{quantityInML180.map((item, index) => {
                return Number(item?.averageRate?.$numberDecimal).toFixed(2);
              })}</td>
  
              {/* starting stock */}
              <td className="tg-0lax">
                {quantityInML750.map((item, index) => {
                  return item.openingStock;
                })}
              </td>
              <td className="tg-0lax">
                {quantityInML375.map((item, index) => {
                  return item.openingStock;
                })}
              </td>
              <td className="tg-0lax">
                {quantityInML180.map((item, index) => {
                  return item.openingStock;
                })}
              </td>
  
              {/* Income (Purchase)-D */}
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
  
              {/* buy rate */}
              <td className="tg-0lax">
                {quantityInML750.map((item, index) => {
                  return (Number(item.purchaseShopRate?.$numberDecimal)||0).toFixed(2);
                })}
              </td>
              <td className="tg-0lax">
                {quantityInML375.map((item, index) => {
                  return (Number(item.purchaseShopRate?.$numberDecimal)||0).toFixed(2);
                })}
              </td>
              <td className="tg-0lax">
                {quantityInML180.map((item, index) => {
                  return (Number(item.purchaseShopRate?.$numberDecimal)||0).toFixed(2);
                })}
              </td>
  
              {/* Inflow (Purchase)-Ba */}
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
  
              {/* Purchase Rate - Ba */}
              <td className="tg-0lax">
                {quantityInML750.map((item, index) => {
                  return (Number(item.purchaseOutSideRate?.$numberDecimal)||0).toFixed(2);
                })}
              </td>
              <td className="tg-0lax">
                {quantityInML375.map((item, index) => {
                  return (Number(item.purchaseOutSideRate?.$numberDecimal)||0).toFixed(2);
                })}
              </td>
              <td className="tg-0lax">
                {quantityInML180.map((item, index) => {
                  return (Number(item.purchaseOutSideRate?.$numberDecimal)||0).toFixed(2);
                })}
              </td>
  
              {/* inflow (credit) */}
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
  
              {/* sending */}
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
  
              {/* sum/remainder */}
              <td className="tg-0lax">
                {quantityInML750.length > 0
                  ? quantityInML750.map((item, index) => {
                      return item.remaining;
                    })
                  : 0}
              </td>
              <td className="tg-0lax">
                {quantityInML375.length > 0
                  ? quantityInML375.map((item, index) => {
                      return item.remaining;
                    })
                  : 0}
              </td>
              <td className="tg-0lax">
                {quantityInML180.length > 0
                  ? quantityInML180.map((item, index) => {
                      return item.remaining;
                    })
                  : 0}
              </td>
  
              {/* closing stock */}
              <td className="tg-0lax">
                {quantityInML750.length > 0
                  ? quantityInML750.map((item, index) => {
                      return item.closingStock;
                    })
                  : 0}
              </td>
              <td className="tg-0lax">
                {quantityInML375.length > 0
                  ? quantityInML375.map((item, index) => {
                      return item.closingStock;
                    })
                  : 0}
              </td>
              <td className="tg-0lax">
                {quantityInML180.length > 0
                  ? quantityInML180.map((item, index) => {
                      return item.closingStock;
                    })
                  : 0}
              </td>
  
              {/* sale, marketing, closeout */}
              <td className="tg-0lax">
                {quantityInML750.length > 0
                  ? quantityInML750.map((item, index) => {
                      return item.sales;
                    })
                  : 0}
              </td>
              <td className="tg-0lax">
                {quantityInML375.length > 0
                  ? quantityInML375.map((item, index) => {
                      return item.sales;
                    })
                  : 0}
              </td>
              <td className="tg-0lax">
                {quantityInML180.length > 0
                  ? quantityInML180.map((item, index) => {
                      return item.sales;
                    })
                  : 0}
              </td>
  
              {/* rate */}
              <td className="tg-0lax">
                {quantityInML750.map((item, index) => {
                  return (Number(item.sellingRate?.$numberDecimal)||0).toFixed(2);
                })}
              </td>
              <td className="tg-0lax">
                {quantityInML375.map((item, index) => {
                  return (Number(item.sellingRate?.$numberDecimal)||0).toFixed(2);
                })}
              </td>
              <td className="tg-0lax">
                {quantityInML180.map((item, index) => {
                  return (Number(item.sellingRate?.$numberDecimal)||0).toFixed(2);
                })}
              </td>
  
              {/* sum */}
              <td className="tg-0lax">
                {(Number(quantityInML750.length > 0
                  ? quantityInML750.map((item, index) => {
                      return (
                        Number(item.sellingRate?.$numberDecimal)*Number(item.sales)
                      );
                    })
                  : 0)||0).toFixed(2)}
              </td>
              <td className="tg-0lax">
                {(Number(quantityInML375.length > 0
                  ? quantityInML375.map((item, index) => {
                      return (
                        Number(item.sellingRate?.$numberDecimal) * Number(item.sales)
                      );
                    })
                  : 0)||0).toFixed(2)}
              </td>
              <td className="tg-0lax">
                {(Number(quantityInML180.length > 0
                  ? quantityInML180.map((item, index) => {
                      return (
                        Number(item.sellingRate?.$numberDecimal) * Number(item.sales)
                      );
                    })
                  : 0)||0).toFixed(2)}
              </td>
              <td> {(Number(Number(quantityInML750.length > 0
                ? quantityInML750.map((item, index) => {
                  return (
                    Number(item.sellingRate?.$numberDecimal) * Number(item.sales)
                  );
                })
                : 0) + Number(
                quantityInML375.length > 0
                    ? quantityInML375.map((item, index) => {
                      return (
                        Number(item.sellingRate?.$numberDecimal) * Number(item.sales)
                      );
                    })
                    : 0
                ) + Number(
                  quantityInML180.length > 0
                    ? quantityInML180.map((item, index) => {
                      return (
                        Number(item.sellingRate?.$numberDecimal) * Number(item.sales)
                      );
                    })
                    : 0
                ))||0).toFixed(2)}</td>
            </tr>
          );}
        })}
      </>
    );
  }

  else if(shopType==="BAR"){
    return (
      <>
  
        {
        pages.sort((a, b) => b.page.localeCompare(a.page)).map((page, index2) => {
          
          const quantityInML750 = page.entries.filter(
            (entry) => entry.quantityInML === quan1
            );
            
            const quantityInML375 = page.entries.filter(
              (entry) => entry.quantityInML === quan2
              );
              
              const quantityInML180 = page.entries.filter(
                (entry) => entry.quantityInML === quan3
                );
                
                if(index2===pgNo){
      
        
                
                return (
            <tr>
              <th className="tg-0lax">{index+1}</th>
              <td className="tg-0lax">{brandName}</td>
  
             
              <td className="tg-0lax">{quantityInML750.map((item, index) => {
                return Number(item?.averageRate?.$numberDecimal).toFixed(2);
              })}</td>
              <td className="tg-0lax">{quantityInML375.map((item, index) => {
                return Number(item?.averageRate?.$numberDecimal).toFixed(2);
              })}</td>
              <td className="tg-0lax">{quantityInML180.map((item, index) => {
                return Number(item?.averageRate?.$numberDecimal).toFixed(2);
              })}</td>
  
              {/* starting stock */}
              <td className="tg-0lax">
                {quantityInML750.map((item, index) => {
                  return item.openingStock;
                })}
              </td>
              <td className="tg-0lax">
                {quantityInML375.map((item, index) => {
                  return item.openingStock;
                })}
              </td>
              <td className="tg-0lax">
                {quantityInML180.map((item, index) => {
                  return item.openingStock;
                })}
              </td>
  
              {/* Income (Purchase)-D */}
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
  
              {/* buy rate */}
              <td className="tg-0lax">
                {quantityInML750.map((item, index) => {
                  return (Number(item.purchaseShopRate?.$numberDecimal)||0).toFixed(2);
                })}
              </td>
              <td className="tg-0lax">
                {quantityInML375.map((item, index) => {
                  return (Number(item.purchaseShopRate?.$numberDecimal)||0).toFixed(2);
                })}
              </td>
              <td className="tg-0lax">
                {quantityInML180.map((item, index) => {
                  return (Number(item.purchaseShopRate?.$numberDecimal)||0).toFixed(2);
                })}
              </td>
  
              {/* Inflow (Purchase)-Ba */}
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
  
              {/* Purchase Rate - Ba */}
              <td className="tg-0lax">
                {quantityInML750.map((item, index) => {
                  return (Number(item.purchaseOutSideRate?.$numberDecimal)||0).toFixed(2);
                })}
              </td>
              <td className="tg-0lax">
                {quantityInML375.map((item, index) => {
                  return (Number(item.purchaseOutSideRate?.$numberDecimal)||0).toFixed(2);
                })}
              </td>
              <td className="tg-0lax">
                {quantityInML180.map((item, index) => {
                  return (Number(item.purchaseOutSideRate?.$numberDecimal)||0).toFixed(2);
                })}
              </td>
  
              {/* inflow (credit) */}
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
  
              {/* sending */}
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
  
              {/* sum/remainder */}
              <td className="tg-0lax">
                {quantityInML750.length > 0
                  ? quantityInML750.map((item, index) => {
                      return item.remaining;
                    })
                  : 0}
              </td>
              <td className="tg-0lax">
                {quantityInML375.length > 0
                  ? quantityInML375.map((item, index) => {
                      return item.remaining;
                    })
                  : 0}
              </td>
              <td className="tg-0lax">
                {quantityInML180.length > 0
                  ? quantityInML180.map((item, index) => {
                      return item.remaining;
                    })
                  : 0}
              </td>
  
              {/* closing stock */}
              <td className="tg-0lax">
                {quantityInML750.length > 0
                  ? quantityInML750.map((item, index) => {
                      return item.closingStock;
                    })
                  : 0}
              </td>
              <td className="tg-0lax">
                {quantityInML375.length > 0
                  ? quantityInML375.map((item, index) => {
                      return item.closingStock;
                    })
                  : 0}
              </td>
              <td className="tg-0lax">
                {quantityInML180.length > 0
                  ? quantityInML180.map((item, index) => {
                      return item.closingStock;
                    })
                  : 0}
              </td>
  
              {/* sale, marketing, closeout */}
              <td className="tg-0lax">
                {quantityInML750.length > 0
                  ? quantityInML750.map((item, index) => {
                      return item.sales;
                    })
                  : 0}
              </td>
              <td className="tg-0lax">
                {quantityInML375.length > 0
                  ? quantityInML375.map((item, index) => {
                      return item.sales;
                    })
                  : 0}
              </td>
              <td className="tg-0lax">
                {quantityInML180.length > 0
                  ? quantityInML180.map((item, index) => {
                      return item.sales;
                    })
                  : 0}
              </td>
  
              {/* rate */}
              <td className="tg-0lax">
                {quantityInML750.map((item, index) => {
                  return (Number(item.sellingRate?.$numberDecimal)||0).toFixed(2);
                })}
              </td>
              <td className="tg-0lax">
                {quantityInML375.map((item, index) => {
                  return (Number(item.sellingRate?.$numberDecimal)||0).toFixed(2);
                })}
              </td>
              <td className="tg-0lax">
                {quantityInML180.map((item, index) => {
                  return (Number(item.sellingRate?.$numberDecimal)||0).toFixed(2);
                })}
              </td>
  
              {/* sum */}
              <td className="tg-0lax">
                {Number(quantityInML750.length > 0
                  ? quantityInML750.map((item, index) => {
                      return (
                        Number(item.sellingRate?.$numberDecimal)*Number(item.sales)
                      );
                    })
                  : 0).toFixed(2)}
              </td>
              <td className="tg-0lax">
                {Number(quantityInML375.length > 0
                  ? quantityInML375.map((item, index) => {
                      return (
                        Number(item.sellingRate?.$numberDecimal) * Number(item.sales)
                      );
                    })
                  : 0).toFixed(2)}
              </td>
              <td className="tg-0lax">
                {Number(quantityInML180.length > 0
                  ? quantityInML180.map((item, index) => {
                      return (
                        Number(item.sellingRate?.$numberDecimal) * Number(item.sales)
                      );
                    })
                  : 0).toFixed(2)}
              </td>
              <td> {Number(Number(quantityInML750.length > 0
                ? quantityInML750.map((item, index) => {
                  return (
                    Number(item.sellingRate?.$numberDecimal) * Number(item.sales)
                  );
                })
                : 0) + Number(
                quantityInML375.length > 0
                    ? quantityInML375.map((item, index) => {
                      return (
                        Number(item.sellingRate?.$numberDecimal) * Number(item.sales)
                      );
                    })
                    : 0
                ) + Number(
                  quantityInML180.length > 0
                    ? quantityInML180.map((item, index) => {
                      return (
                        Number(item.sellingRate?.$numberDecimal) * Number(item.sales)
                      );
                    })
                    : 0
                )).toFixed(2)}</td>
            </tr>
          );}
        })}
      </>
    );
  }

  
};

export default RegularData;
