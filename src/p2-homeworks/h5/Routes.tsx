import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import { JuniorPlus } from "./pages/JuniorPlus";
import { Junior } from "./pages/Junior";
import { HomeworkFrom9To10 } from "./pages/HomeworkFrom9To10";

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    JUNIOR: "/junior",
    JUNIOR_PLUS: "/junior-plus",
    HOMEWORK_FROM_9_TO_10: "/homework_from_9_to_10",
}

function Routes() {
    return (
        <div>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={PATH.PRE_JUNIOR} />} />
                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior />} />
                <Route path={PATH.JUNIOR} render={() => <Junior />} />
                <Route path={PATH.JUNIOR_PLUS} render={() => <JuniorPlus />} />
                <Route path={PATH.HOMEWORK_FROM_9_TO_10} render={() => <HomeworkFrom9To10 />} />
                <Route render={() => <Error404 />} />
            </Switch>
        </div>
    );
}

export default React.memo(Routes);
