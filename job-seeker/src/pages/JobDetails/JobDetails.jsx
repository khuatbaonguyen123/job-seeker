import { ParallaxSection } from "../../component/ParallaxSection";
import { JobHeadWide } from "./JobHeadWide";
import { JobWebDevider } from "./JobWebDevider";

export const JobDetails = () => {
    return(
    <>
        <ParallaxSection title="Application Developer For Android" />
        <section>
		<div class="block">
			<div class="container">
				<div class="row">
				 	<div class="col-lg-12 column">
				 		<div class="job-single-sec style3">
                            <JobHeadWide />
                            <JobWebDevider />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </>
    );
}