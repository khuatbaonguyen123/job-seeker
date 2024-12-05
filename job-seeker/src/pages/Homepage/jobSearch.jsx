import { SearchBar } from "../../component/searchBar";

export const JobSearch = () => {
  return (
    <>
      <section>
        <div class="block no-padding">
          <div class="container fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="main-featured-sec">
                  <div class="new-slide">
                    <img src="images/resource/vector-1.png"></img>
                  </div>
                  <SearchBar />
                  <div class="scroll-to">
                    <a href="#scroll-here" title="">
                      <i class="la la-arrow-down"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
};
