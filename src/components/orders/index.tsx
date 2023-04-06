import useSWR from "swr";
import { fetcher } from "../fetcher";
import "./_orders.scss";
import { useState } from "react";

export const Orders = () => {
  const { data, error } = useSWR("/orders", fetcher);
  console.log(data);

  if (error) return <div>Failed to load...</div>;
  if (!data) return <div>loading...</div>;

  return (
    <section className="ordersSection">
      <h1>Совершённые заказы</h1>
      {data.map((data: string | boolean) => (
        <>
          {/* <div>{data.orderType}</div>
          <div>{data.phone}</div>
          <div>{data.commentForOrder}</div>
          <div>{data.totalCount}</div>
          <div>{data.totalPrice}</div> */}
        </>
      ))}
    </section>
  );
};
