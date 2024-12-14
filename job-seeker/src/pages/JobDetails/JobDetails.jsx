import React, { useState } from 'react';
import { ParallaxSection } from "../../component/ParallaxSection";
import { JobHeadWide } from "./JobHeadWide";
import { JobWebDevider } from "./JobWebDevider";
import { ApplicationForm } from '../../component/ApplicationForm';

export const JobDetails = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
    }

    const closePopup = () => {
        setIsOpen(false);
    }
    return(
    <>
        <ParallaxSection title="Application Developer For Android" />
        <section>
		<div class="block">
			<div class="container">
				<div class="row">
				 	<div class="col-lg-12 column">
				 		<div class="job-single-sec style3">
                            <JobHeadWide openPopup={openPopup}/>
                            <JobWebDevider />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        {isOpen && (
            <ApplicationForm isOpen={isOpen} closePopup={closePopup}/>
        )}
    </>
    );
}