import { Knex } from "knex";

const TABLE_NAME = "tasks";

/**
 * Delete existing entries and seed values for table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function seed(knex: Knex): Promise<void> {
  return knex(TABLE_NAME)
    .del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {
          title: "Task 1 of User 1",
          completed: false,
          created_by: 1,
        },
        {
          title: "Task 2 of User 1",
          completed: false,
          created_by: 1,
        },
        {
          title: "Task 3 of User 1",
          completed: false,
          created_by: 1,
        },
        {
          title: "Task 4 of User 1",
          completed: false,
          created_by: 1,
        },
        {
          title: "Task 5 of User 1",
          completed: false,
          created_by: 1,
        },
        {
          title: "Task 6 of User 1",
          completed: false,
          created_by: 1,
        },
        {
          title: "Task 7 of User 1",
          completed: false,
          created_by: 1,
        },
        {
          title: "Task 8 of User 1",
          completed: false,
          created_by: 1,
        },
        {
          title: "Task 9 of User 1",
          completed: false,
          created_by: 1,
        },
        {
          title: "Task 10 of User 1",
          completed: false,
          created_by: 1,
        },
        {
          title: "Task 11 of User 1",
          completed: false,
          created_by: 1,
        },
        {
          title: "Task 12 of User 1",
          completed: false,
          created_by: 1,
        },
        {
          title: "Task 13 of User 1",
          completed: false,
          created_by: 1,
        },
        {
          title: "Task 14 of User 1",
          completed: false,
          created_by: 1,
        },
        {
          title: "Task 15 of User 1",
          completed: false,
          created_by: 1,
        },
        {
          title: "Task 16 of User 1",
          completed: false,
          created_by: 1,
        },
        {
          title: "Task 17 of User 1",
          completed: false,
          created_by: 1,
        },
        {
          title: "Task 18 of User 1",
          completed: false,
          created_by: 1,
        },
        {
          title: "Task 19 of User 1",
          completed: false,
          created_by: 1,
        },
        {
          title: "Task 20 of User 1",
          completed: false,
          created_by: 1,
        },
        {
          title: "Task 1 of User 2",
          completed: false,
          created_by: 2,
        },
        {
          title: "Task 2 of User 2",
          completed: false,
          created_by: 2,
        },
        {
          title: "Task 3 of User 2",
          completed: false,
          created_by: 2,
        },
        {
          title: "Task 4 of User 2",
          completed: false,
          created_by: 2,
        },
        {
          title: "Task 5 of User 2",
          completed: false,
          created_by: 2,
        },
        {
          title: "Task 6 of User 2",
          completed: false,
          created_by: 2,
        },
        {
          title: "Task 7 of User 2",
          completed: false,
          created_by: 2,
        },
        {
          title: "Task 8 of User 2",
          completed: false,
          created_by: 2,
        },
        {
          title: "Task 9 of User 2",
          completed: false,
          created_by: 2,
        },
        {
          title: "Task 10 of User 2",
          completed: false,
          created_by: 2,
        },
        {
          title: "Task 11 of User 2",
          completed: false,
          created_by: 2,
        },
        {
          title: "Task 12 of User 2",
          completed: false,
          created_by: 2,
        },
        {
          title: "Task 13 of User 2",
          completed: false,
          created_by: 2,
        },
        {
          title: "Task 14 of User 2",
          completed: false,
          created_by: 2,
        },
        {
          title: "Task 15 of User 2",
          completed: false,
          created_by: 2,
        },
        {
          title: "Task 16 of User 2",
          completed: false,
          created_by: 2,
        },
        {
          title: "Task 17 of User 2",
          completed: false,
          created_by: 2,
        },
        {
          title: "Task 18 of User 2",
          completed: false,
          created_by: 2,
        },
        {
          title: "Task 19 of User 2",
          completed: false,
          created_by: 2,
        },
        {
          title: "Task 20 of User 2",
          completed: false,
          created_by: 2,
        },
        {
          title: "Task 1 of User 3",
          completed: false,
          created_by: 3,
        },
        {
          title: "Task 2 of User 3",
          completed: false,
          created_by: 3,
        },
        {
          title: "Task 3 of User 3",
          completed: false,
          created_by: 3,
        },
        {
          title: "Task 4 of User 3",
          completed: false,
          created_by: 3,
        },
        {
          title: "Task 5 of User 3",
          completed: false,
          created_by: 3,
        },
        {
          title: "Task 6 of User 3",
          completed: false,
          created_by: 3,
        },
        {
          title: "Task 7 of User 3",
          completed: false,
          created_by: 3,
        },
        {
          title: "Task 8 of User 3",
          completed: false,
          created_by: 3,
        },
        {
          title: "Task 9 of User 3",
          completed: false,
          created_by: 3,
        },
        {
          title: "Task 10 of User 3",
          completed: false,
          created_by: 3,
        },
        {
          title: "Task 11 of User 3",
          completed: false,
          created_by: 3,
        },
        {
          title: "Task 12 of User 3",
          completed: false,
          created_by: 3,
        },
        {
          title: "Task 13 of User 3",
          completed: false,
          created_by: 3,
        },
        {
          title: "Task 14 of User 3",
          completed: false,
          created_by: 3,
        },
        {
          title: "Task 15 of User 3",
          completed: false,
          created_by: 3,
        },
      ]);
    });
}
