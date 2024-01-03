import { Knex } from "knex";

const TABLE_NAME = "tasks";

/**
 * Delete existing entries and seed values for table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function seed(knex: Knex): Promise<void> {
  return (
    knex(TABLE_NAME)
      // .del()
      .then(() => {
        return knex(TABLE_NAME).insert([
          {
            title: "Task 1 of User 1",
            completed: false,
            created_by: 1,
          },
          {
            title: "Task 1 of User 1",
            completed: false,
            created_by: 1,
          },
          {
            title: "Task 1 of User 2",
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
        ]);
      })
  );
}
