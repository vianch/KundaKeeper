import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
  StoreEnhancer,
} from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import { chatMessagesReducer } from "../../containers/chat/reducers/chat-messages.reducer";
import { chatUsersReducer } from "../../containers/chat/reducers/chat-users.reducer";
import { globalConfig } from "../config/global.config";

const rootReducers = combineReducers({
  chatMessagesReducer,
  chatUsersReducer,
});

function configureStore(): Store {
  let enhancer: StoreEnhancer<{ dispatch: {} }, {}>;

  if (globalConfig.ENVIRONMENT === globalConfig.DEVELOPMENT) {
    const loggerMiddleware = createLogger({
      duration: true,
      level: "log",
      predicate: (getState, actions) => true,
      timestamp: true,
    });

    enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware));
  } else {
    enhancer = compose(applyMiddleware(thunkMiddleware));
  }

  return createStore(rootReducers, enhancer);
}

export const store = configureStore();
