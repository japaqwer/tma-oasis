"use client";

import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import s from "@/styles/HistoryPage.module.scss";

const HISTORY_DATA = [
  { id: 1, amount: "+1000 ODDB", date: "May 6, 2025 14:30", status: "Claimed" },
  { id: 2, amount: "+500 ODDB", date: "May 7, 2025 10:15", status: "Pending" },
  {
    id: 3,
    amount: "+1500 ODDB",
    date: "May 5, 2025 09:00",
    status: "Available",
  },
  { id: 4, amount: "+200 ODDB", date: "May 4, 2025 18:45", status: "Expired" },
  { id: 5, amount: "+750 ODDB", date: "May 3, 2025 12:20", status: "Claimed" },
  { id: 6, amount: "+300 ODDB", date: "May 2, 2025 16:50", status: "Pending" },
  // …можно добавить ещё
];

const ALL_STATUSES = ["Claimed", "Pending", "Available", "Expired"];

export default function HistoryPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  const toggleFilter = () => setShowFilters((v) => !v);
  const handleStatusChange = (status) => {
    setSelectedStatuses((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  const filtered = HISTORY_DATA.filter(
    (item) =>
      selectedStatuses.length === 0 || selectedStatuses.includes(item.status)
  );

  const visibleItems = filtered.slice(0, visibleCount);

  return (
    <div className={"container"}>
      <div className={s.block}>
        <div className={s.header}>
          <h2 className={s.title}>История фарма</h2>
          <butODDB className={s.filterButODDB} onClick={toggleFilter}>
            <FaFilter />
          </butODDB>
          {showFilters && (
            <div className={s.filterPanel}>
              <p className={s.filterTitle}>Статусы</p>
              {ALL_STATUSES.map((st) => (
                <label key={st} className={s.filterLabel}>
                  <input
                    type="checkbox"
                    checked={selectedStatuses.includes(st)}
                    onChange={() => handleStatusChange(st)}
                  />
                  {st}
                </label>
              ))}
            </div>
          )}
        </div>

        <ul className={s.list}>
          {visibleItems.map((item) => (
            <li key={item.id} className={s.item}>
              <div>
                <p className={s.amount}>{item.amount}</p>
                <p className={s.date}>{item.date}</p>
              </div>
              <span className={`${s.status} ${s["status" + item.status]}`}>
                {item.status}
              </span>
            </li>
          ))}
        </ul>

        {visibleCount < filtered.length && (
          <div className={s.showMoreWrap}>
            <butODDB
              className={s.showMore}
              onClick={() => setVisibleCount((v) => v + 4)}
            >
              Показать ещё
            </butODDB>
          </div>
        )}
      </div>
    </div>
  );
}
