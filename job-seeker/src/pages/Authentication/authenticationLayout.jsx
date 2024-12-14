import { SignupForm } from "./signupForm";
import { SigninForm } from "./signinForm";

const AuthenticationLayout = ({signup}) => {
  return (
    <>
      <section>
        <div class="block no-padding">
          <div class="container fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="main-featured-sec">
                  <div
                    className="new-slide"
                    style={{ contain: "layout", height: "auto" }}
                  >
                    <div>
                        {signup? <SignupForm /> : <SigninForm />}
                    </div>
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

export { AuthenticationLayout };
