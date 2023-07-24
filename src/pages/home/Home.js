import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "./heroSection/HeroSection";
import Categories from "./categories/Categories";

import { getCategoriesAPI } from "../../apiServices/Categories";
import { Loader } from "../../components/loadingScreen/Loader";
import { Footer } from "../../components/Footer";

const Home = () => {
    const [loader, setLoader] = useState(false);
    const [catData, setCatData] = useState("");

    useEffect(() => {
        setLoader(true);
        getCategoriesAPI()
            .then((categories) => {
                setCatData(categories);
                setLoader(false);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            {loader ? (
                <Loader />
            ) : (
                <>
                    <Navbar />
                    <HeroSection />
                    <Categories data={catData} />
                    <Footer />

                </>
            )}
        </div>
    );
};

export default Home;
