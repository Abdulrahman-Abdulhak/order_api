import {
  decimal,
  float,
  int,
  mysqlTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";

const timeStamps = {
  created_at: timestamp().defaultNow(),
  updated_at: timestamp(),
  deleted_at: timestamp(),
};

export const users = mysqlTable("users", {
  id: serial().primaryKey(),
  firstName: varchar({ length: 255 }).notNull(),
  lastName: varchar({ length: 255 }).notNull(),
  phone: varchar({ length: 10 }).notNull(),
  ...timeStamps,
});

export const locations = mysqlTable("locations", {
  id: serial().primaryKey(),
  long: float().notNull(),
  lat: float().notNull(),
  orderId: int(),
  userId: int(),
});

export const products = mysqlTable("products", {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 2000 }),
  price: decimal({ precision: 9, scale: 2, unsigned: true }).notNull(),
  ...timeStamps,
});

export const orders = mysqlTable("orders", {
  id: serial().primaryKey(),
  userId: int().notNull(),
  productId: int().notNull(),
  locationId: int().notNull(),
  ...timeStamps,
});

//* Relations

export const userRelations = relations(users, ({ many }) => ({
  locations: many(locations),
}));

export const locationRelations = relations(locations, ({ one }) => ({
  user: one(users, {
    fields: [locations.userId],
    references: [users.id],
  }),
  order: one(orders, {
    fields: [locations.userId],
    references: [orders.id],
  }),
}));

export const orderRelations = relations(orders, ({ one }) => ({
  users: one(users),
  products: one(products),
  locations: one(locations),
}));

export const productRelations = relations(products, ({ many }) => ({
  locations: many(orders),
}));
