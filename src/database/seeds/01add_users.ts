import { Knex } from "knex";

const TABLE_NAME = "users";

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
          username: "user1",
          password:
            "$2b$10$xm48I4u9/4UCaTCfQY1qkubMU14wEXF.cUsCd7sIUhYeBKb27gvS2",
        },
        {
          username: "user2",
          password:
            "$2b$10$FnsCiKVmXRaaSPTuFlvOIOGuyF7RGvyphReCnL/ppXIRrwesHo3fy",
        },
        {
          username: "user3",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user4",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user5",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user6",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user7",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user8",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user9",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user10",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user11",
          password:
            "$2b$10$xm48I4u9/4UCaTCfQY1qkubMU14wEXF.cUsCd7sIUhYeBKb27gvS2",
        },
        {
          username: "user12",
          password:
            "$2b$10$FnsCiKVmXRaaSPTuFlvOIOGuyF7RGvyphReCnL/ppXIRrwesHo3fy",
        },
        {
          username: "user13",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user14",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user15",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user16",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user17",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user18",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user19",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user20",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user21",
          password:
            "$2b$10$xm48I4u9/4UCaTCfQY1qkubMU14wEXF.cUsCd7sIUhYeBKb27gvS2",
        },
        {
          username: "user22",
          password:
            "$2b$10$FnsCiKVmXRaaSPTuFlvOIOGuyF7RGvyphReCnL/ppXIRrwesHo3fy",
        },
        {
          username: "user23",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user24",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user25",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user26",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user27",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user28",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user29",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user30",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user31",
          password:
            "$2b$10$xm48I4u9/4UCaTCfQY1qkubMU14wEXF.cUsCd7sIUhYeBKb27gvS2",
        },
        {
          username: "user32",
          password:
            "$2b$10$FnsCiKVmXRaaSPTuFlvOIOGuyF7RGvyphReCnL/ppXIRrwesHo3fy",
        },
        {
          username: "user33",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user34",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user35",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user36",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user37",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user38",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user39",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
        {
          username: "user40",
          password:
            "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
        },
      ]);
    });
}
