"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Header } from "@/app/components/Header";
import chris from "../../../../public/assets/chris.svg";
import starHalf from "../../../../public/assets/star-half.svg";
import googleLogo from "../../../../public/assets/google-logo.svg";
import starFilled from "../../../../public/assets/star-filled.svg";

export default function CompanyPage() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/companies/${id}`);
        const data = await res.json();
        setApiData(data);
      } catch (error) {
        console.error("Error fetching API data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="company-page-wrapper">
      <Header />
      {loading ? (
        <div>
          <h1 className="loading">Loading...</h1>
        </div>
      ) : (
        <div className="company-card">
          <div className="company-heading-message">
            <p className="company-satisfaction">
              {apiData?.percent}% Customer Satisfaction
            </p>
            <p className="company-heading">{apiData?.heading}</p>
            <p className="company-message">{apiData?.message}</p>
          </div>
          <div className="name-review-wrapper">
            <div className="image-name-wrapper">
              <Image className="chris" src={chris} alt="Chris" />
              <div>
                <p className="company-owner-name">{apiData?.name}</p>
                <p className="company-description">{apiData?.description}</p>
              </div>
            </div>
            <div className="image-name-wrapper">
              <Image
                className="Google Logo"
                src={googleLogo}
                alt="Google Logo"
              />
              <div>
                <p className="company-owner-name">Google Reviews</p>
                <div className="star-box-wrapper">
                  <Image
                    className="star-filled"
                    src={starFilled}
                    alt="Star Filled"
                  />
                  <Image
                    className="star-filled"
                    src={starFilled}
                    alt="Star Filled"
                  />
                  <Image
                    className="star-filled"
                    src={starFilled}
                    alt="Star Filled"
                  />
                  <Image
                    className="star-filled"
                    src={starFilled}
                    alt="Star Filled"
                  />
                  <Image className="star-half" src={starHalf} alt="Star Half" />
                  <p>{apiData?.rating}/5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
