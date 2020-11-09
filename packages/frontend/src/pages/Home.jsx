import React from "react";
import { Kuby_Layout } from "../components/Kuby_Layout";
import { UserList } from "../components/UserList";

export default function Home() {
  return (
    <>
      <Kuby_Layout>
        <UserList />
      </Kuby_Layout>
    </>
  );
}
