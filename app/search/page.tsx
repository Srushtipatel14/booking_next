'use client';

import { useRouter } from 'next/navigation';
import { FiArrowLeft } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import "../css/search.css";
import "../css/recommended.css";
import { useState } from "react";
import Link from 'next/link';

const Searchfield = () => {
    const router = useRouter();
    const [showDivSection, setShowDivSection] = useState(true)

    return (
        <div className="container-fluid position-relative recommend_movie m-0 p-0" style={{ minHeight: "100vh" }}>
            <div className="d-flex align-items-center search_top justify-content-between px-3  py-5">
                <div style={{ cursor: "pointer" }} onClick={() =>router.back()}>
                    <FiArrowLeft size={30} />
                </div>
                <form style={{ width: "50%" }}>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control search-input"
                            placeholder="Search for Cinemas and Movies"
                            aria-label="Search"
                            style={{
                                outline: "none",
                                boxShadow: "none",
                                borderRadius: "0px",
                                height: "3rem",
                            }}
                        />
                    </div>
                </form>
                <div style={{ cursor: "pointer" }} onClick={() =>router.back()}>
                    <RxCross2 size={30} />
                </div>
            </div>
            <div className="filter_Section mt-4">
                <div className="filter_Sec1">
                    <div className="filter_Sec1Left ps-3">
                        <button onClick={() => setShowDivSection(true)} className={showDivSection ? "filter_Select_btn" : 'filter_NoSelect_btn'}>Movies</button>
                        <button onClick={() => setShowDivSection(false)} className={!showDivSection ? "filter_Select_btn" : 'filter_NoSelect_btn'}>Cinemas</button>
                    </div>
                    {showDivSection && (
                        <div style={{ display: "flex", gap: "5px", fontSize: "12px" }}>
                            <div style={{ padding: "5px 10px" }}>Filter</div>
                            {["Hindi", "English", "Bangali", "Punjabi", "Telugu", "Bhojpuri", "Marathi"].map((item, index) => (
                                <span key={index} className="filter_Sec1RightLan" >
                                    {item}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {showDivSection ? (
                    <div className="filter_Sec3 mt-5">
                        {[
                            { language: "Hindi", movies: [1, 2, 3, 4, 5, 6, 7, 8] },
                            { language: "Telugu", movies: [1, 2, 3] },
                            { language: "Bangali", movies: [1, 2, 3] },
                            { language: "Punjabi", movies: [1] },
                            { language: "English", movies: [1, 2, 3] },
                            { language: "English", movies: [1, 2, 3, 4, 5, 6, 7] }
                        ].map((section, index) => (
                            <div key={index} className="fil_movie_list1 mt-1">
                                <div className="fil_movie_list">
                                    <div className="language_title my-3">{section.language}</div>
                                    {section.movies.map((row, rowIndex) => (
                                        <Link href="/movie" className="fil_cinema_text">Main Tera Hero</Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="filter_Sec2 mt-5">
                        <div className="fil_cinema_list mt-3" onClick={() => router.push("/cinema")}>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 19].map((item, index) => (
                                <ul key={index} className="fil_cinema_name">
                                    <li className="fil_cinema_text">INOX: Himalaya mall,DriveIn Road,Ahmedabad</li>
                                </ul>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Searchfield;
