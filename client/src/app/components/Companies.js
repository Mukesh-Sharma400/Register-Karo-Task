"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const Companies = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/companies");
        const data = await res.json();
        setApiData(data);
      } catch (error) {
        console.error("Error fetching API data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <h1 className="loading">Loading...</h1>
        </div>
      ) : (
        <div className="companies-wrapper-wrapper">
          <h1>Companies List</h1>
          <div className="companies-wrapper">
            {apiData?.map((company) => (
              <Link
                href={`/company/${company.id}`}
                key={company?.id}
                className="company-wrapper"
              >
                <h3>{company?.heading}</h3>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
