"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateTicket() {
  const router = useRouter();
  const [data, setData] = useState({
    title: "",
    body: "",
    priority: "low",
    isLoading: false,
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({
      isLoading: true,
    });
    const ticket = {};
    const res = await fetch("http://localhost:2137/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.status === 201) {
      router.push("/tickets");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Title:</span>
        <input
          required
          type="text"
          onChange={changeHandler}
          value={data.title}
          name="title"
        />
      </label>
      <label>
        <span>Title:</span>
        <textarea
          required
          onChange={changeHandler}
          value={data.body}
          name="body"
        />
      </label>
      <label>
        <span>Priority:</span>
        <select name="priority" onChange={changeHandler} value={data.priority}>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <button className="btn-primary" disabled={data.isLoading}>
        {data.isLoading && <span>Adding...</span>}
        {!data.isLoading && <span>Add Ticket</span>}
      </button>
    </form>
  );
}
