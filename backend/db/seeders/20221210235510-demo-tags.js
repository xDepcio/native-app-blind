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
        data: 'diss na całą polską rap scenę<n>DZWONIE DO MŁODEGO G CZY MA DLA MNIE HAJS ZA KOKSRUCHY ROBIONE NON STOP<n>POTEM DZWONIE DO MALIKA ZE MA MI PLACIC HARACZ OD KAZDEGO SPRZEDANEGO KEBABA 5 PROCENT DOBRA 10 PROCENT BO INACZEJ JEGO BABA BEDZIE MIAŁA ROZJEBANE KROCZE<n>DZWONIE DO TEDEGO I MÓWIE ŻE OD DZISIAJ W JEGO MERCEDESIE FELE TOCZE I ZE MA DAC PLIK PEELENÓW NA POCZET NA POCZĄTEK<n>POTEM WYKONUJE NUMER DO ERIPE MOWIE MU JESTES CHUJEM A MASZ CIPE<n>POTEM DZWONIE DO QUEBONAFIDE MOWIE ŻE JEST RAPEREM ZA DYCHE A ON CIESZY MICHE CHYBA OD FEJMU JUZ CAŁKIEM MU SIE POJEBAŁO',
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
