import LoadingCircleSpinner from "../Components/Misc/LoadingCircle";
import { useNavigation, Outlet } from "react-router-dom";

export default function Layout(){
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading"

    return (
        <>
            {isLoading && <LoadingCircleSpinner />}
            <Outlet />
        </>
    )
}