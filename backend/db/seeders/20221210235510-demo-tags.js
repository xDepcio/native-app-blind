'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Tags', [
      {
        tagId: 'D3CD5A1E',
        data: 'Termin ważności: 22.07.2023<n>Wartość odżywcza w 100ml:<n>Wartość energetyczna: 60 kcal<n>Tłuszcz: 3.2 g<n>Weglowodany: 4.7 g<n>Białko: 3.0 g<n>Sól 0.10 g',
        type: 'onepage'
      },
      {
        tagId: 'D2F8EC19',
        data: 'Szampon<n>Opis: Szampon jak szampon<n>Skład:<n>- Aqua<n>- Sodium Laureth Sulfate<n>- Cocamidopropyl Betaine<n>- Sodium Chloride<n>- Polyquaternium-10<n>- Oryzanol<n>- Maris Sal<n>- Glycerin<n>- PEG-40 Hydrogenated Castor Oil',
        type: 'onepage'
      },
      {
        tagId: '058F4AAD5AE100',
        data: 'Instrukcja obsługi odkurzacza:<n>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words<n>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words<p>Zasady gwarancji:<n>Contrary to popular belief, Lorem Ipsum is not simply random text.<n>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words',
        type: 'multipage'
      }
      ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
