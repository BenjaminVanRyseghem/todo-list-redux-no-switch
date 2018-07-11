import GetAll from "./tasks/getAll";
import { requestApi } from "../../helpers/fetcher";

export const getAll = () => requestApi(new GetAll());
