import * as express from "express";
import pgPromise, { ParameterizedQuery } from "pg-promise";

export const register = (app: express.Application) => {
    const oidc = app.locals.oidc;
    const port = parseInt(process.env.PGPORT || "5432", 10);
    const config = {
        database: process.env.PGDATABASE || "postgres",
        host: process.env.PGHOST || "localhost",
        port,
        user: process.env.PGUSER || "postgres",
    };
    
    const pgp = pgPromise();
    const db = pgp(config);

    app.get(`/api/titles/all`, oidc.ensureAuthenticated(), async (req: any, res) => {
        try {
            const titles = await db.any(`
                SELECT
                    id
                    , name
                    , author
                    , pages
                    , created_time
                FROM titles`);
            return res.json(titles);
        } catch (err: any) {
            console.error(err);
            res.json({ error: err.message || err });
        }
    });

    app.post(`/api/titles/add`, oidc.ensureAuthenticated(), async (req: any, res) => {
        try {
            const { name, author, pages } = req.body;
            const addTitle = new ParameterizedQuery({
                text: `
                INSERT INTO titles(name, author, pages)
                VALUES($1, $2, $3);
                `,
                values: [name, author, pages]
            });
            const id = await db.one(addTitle);
            return res.json({ id });
        } catch (err: any) {
            console.error(err);
            res.json({ error: err.message || err });
        }
    })
};