import useSignInWithEmailLink from "@/hooks/useSignInWithEmailLink";
import AuthSent from "@/app/apply/components/Auth/AuthSent";
import AuthRevalidation from "@/app/apply/components/Auth/AuthRevalidation";

const AuthForm = () => {

    const {
        loading, isEmailStored, error, isSent,
        handleSignIn, handleRevalidation
    } = useSignInWithEmailLink()

    if(!isEmailStored)
        return (
            <AuthRevalidation loading={loading} error={error} handleRevalidation={handleRevalidation} />
        )

    return (
        <form onSubmit={handleSignIn} className="z-50 pt-36 flex flex-1 flex-col mx-3 items-center justify-center">
            {!isSent && (
                <>
                    <div className="w-fit mx-auto text-center">
                        <label className="block font-bold text-xl sm:text-2xl mx-3 mb-2" htmlFor="email">Email adresinizi doğrulayın</label>
                        <input className={"text-center w-[clamp(230px,70dvw,320px)] py-2 bg-[rgba(21,21,21,0.395731)] border-solid border-[4px] border-red-900 rounded-[14px] outline-0 disabled:border-gray-500 transition-colors duration-200"} name={"email"} id={"email"} />
                    </div>
                    <button disabled={loading || isSent} className="transition-colors duration-200 text-sm xsm:text-base mt-3 bg-red-950 py-3 px-5 rounded-[15px] disabled:bg-gray-500 disabled:text-gray-400">Doğrula</button>
                </>
            )}
            {isSent && <AuthSent />}
        </form>
    );
};

export default AuthForm;