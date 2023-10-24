import { rest } from "msw";
import { tokenMock, userTokenDataMock } from "./user/userMocks";
import { paths } from "../utils/paths/paths";
import { carsMock } from "./cars/carsMocks";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiUrl}${paths.user}${paths.login}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),

  rest.get(`${apiUrl}${paths.cars}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ marcas: carsMock }));
  }),

  rest.post(
    `${apiUrl}${paths.user}${paths.favorites}${paths.add}`,
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          message: "Car added to favorites",
        })
      );
    }
  ),

  rest.post(
    `${apiUrl}${paths.user}${paths.favorites}${paths.remove}`,
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          message: "Car eliminated from favorites",
        })
      );
    }
  ),

  rest.get(
    `${apiUrl}${paths.user}${paths.favorites}/${userTokenDataMock.id}`,
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({ favoriteCars: userTokenDataMock.favoriteCars })
      );
    }
  ),
];

export const errorHandlers = [
  rest.post(`${apiUrl}${paths.user}${paths.login}`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.post(
    `${apiUrl}${paths.user}${paths.favorites}${paths.add}`,
    (_req, res, ctx) => {
      return res(ctx.status(401));
    }
  ),

  rest.post(
    `${apiUrl}${paths.user}${paths.favorites}${paths.remove}`,
    (_req, res, ctx) => {
      return res(ctx.status(401));
    }
  ),

  rest.get(
    `${apiUrl}${paths.user}${paths.favorites}/${userTokenDataMock.id}`,
    (_req, res, ctx) => {
      return res(ctx.status(401));
    }
  ),
];
