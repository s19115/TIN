const sequelize = require('./sequelize');

const Boss = require('../../model/sequelize/Boss');
const Weapon = require('../../model/sequelize/Weapon');
const Drop = require('../../model/sequelize/Drop');

module.exports = () => {
    Weapon.hasMany(Drop, {
        as: 'Drops',
        foreignKey: {name: 'weapon_id', allowNull: false},
        constraints: true,
        onDelete: 'CASCADE'
    });
    Boss.hasMany(Drop, {
        as: 'Drops',
        foreignKey: {name: 'boss_id', allowNull: false},
        constraints: true,
        onDelete: 'CASCADE'
    });
    Drop.belongsTo(Weapon, {as: 'Weapon', foreignKey: {name: 'weapon_id', allowNull: false}});
    Drop.belongsTo(Boss, {as: 'Boss', foreignKey: {name: 'boss_id', allowNull: false}});
    let allBosses, allWeapons;
    return sequelize
        //{force: true}
        .sync({force: false})
        .then(() => {
            return Boss.findAll();
        })
        .then(bosses => {
            // noinspection EqualityComparisonWithCoercionJS
            if (!bosses || bosses.length == 0) {
                return Boss.bulkCreate([
                    {name: 'Nimran', location: 'The Cold Pits', hp: 1000},
                    {name: 'Byldror', location: 'The Chaos Burrows', hp: 2000},
                    {name: 'Jetid', location: 'The Hungry Delves', hp: 2500},
                    {name: 'Ulrenth', location: 'Huge Covert', hp: 500},
                ])
                    .then(() => {
                        return Boss.findAll();
                    });
            } else {
                return bosses;
            }
        })
        .then(bosses => {
            allBosses = bosses;
            return Weapon.findAll();
        })
        .then(weapons => {
            // noinspection EqualityComparisonWithCoercionJS
            if (!weapons || weapons.length == 0) {
                return Weapon.bulkCreate([
                    {name: 'Armageddon', damageType: "Physical", damageValue: 40},
                    {name: 'Bloodied Dualblade', damageType: "Piercing", damageValue: 30},
                    {name: 'Impure Mithril Edge', damageType: "Cursed", damageValue: 35},
                    {name: 'Hell\'s Scream', damageType: "Fire", damageValue: 45},
                    {name: 'Soul-Forged Fang', damageType: "Fire", damageValue: 45},
                    {name: 'Dustbringer', damageType: "Cursed", damageValue: 70},
                    {name: 'Winterthorn', damageType: "Frost", damageValue: 70},
                    {name: 'Memoire', damageType: "Magic", damageValue: 70},
                    {name: 'Torment', damageType: "Cursed", damageValue: 80},
                    {name: 'Phantom', damageType: "Piercing", damageValue: 90},
                    {name: 'Pure Scroll', damageType: "Magic", damageValue: 25},


                ])
                    .then(() => {
                        return Boss.findAll();
                    });
            } else {
                return weapons;
            }
        })
        .then(weapons => {
            allWeapons = weapons;
            return Drop.findAll();
        })
        .then(drops => {
            // noinspection EqualityComparisonWithCoercionJS
            if (!drops || drops.length == 0) {
                return Drop.bulkCreate([
                    {
                        boss_id: allBosses[0]._id,
                        weapon_id: allWeapons[0]._id,
                        dropChance: 1,
                        dateFrom: '2001-01-01',
                        dateTo: '2009-01-01',
                        minSizeOfGroup: 5,
                        minDifficulty: 1,
                    },
                    {
                        boss_id: allBosses[0]._id,
                        weapon_id: allWeapons[1]._id,
                        dropChance: 1,
                        dateFrom: '2001-01-01',
                        minSizeOfGroup: 5,
                        minDifficulty: 1,
                    },
                    {
                        boss_id: allBosses[2]._id,
                        weapon_id: allWeapons[3]._id,
                        dropChance: 1,
                        dateFrom: '2001-01-01',

                        minSizeOfGroup: 5,
                        minDifficulty: 1,
                    },
                    {
                        boss_id: allBosses[0]._id,
                        weapon_id: allWeapons[2]._id,
                        dropChance: 1,
                        dateFrom: '2001-01-01',
                        dateTo: '2009-01-01',
                        minSizeOfGroup: 5,
                        minDifficulty: 1,
                    },
                    {
                        boss_id: allBosses[1]._id,
                        weapon_id: allWeapons[2]._id,
                        dropChance: 1,
                        dateFrom: '2001-01-01',
                        minSizeOfGroup: 5,
                        minDifficulty: 1,
                    },
                    {
                        boss_id: allBosses[1]._id,
                        weapon_id: allWeapons[2]._id,
                        dropChance: 1,
                        dateFrom: '2001-01-01',
                        dateTo: '2009-01-01',
                        minSizeOfGroup: 5,
                        minDifficulty: 1,
                    },
                    {
                        boss_id: allBosses[3]._id,
                        weapon_id: allWeapons[2]._id,
                        dropChance: 1,
                        dateFrom: '2001-01-01',
                        dateTo: '2009-01-01',
                        minSizeOfGroup: 5,
                        minDifficulty: 1,
                    },
                    {
                        boss_id: allBosses[0]._id,
                        weapon_id: allWeapons[2]._id,
                        dropChance: 1,
                        dateFrom: '2001-01-01',
                        dateTo: '2009-01-01',
                        minSizeOfGroup: 5,
                        minDifficulty: 1,
                    },
                    {
                        boss_id: allBosses[3]._id,
                        weapon_id: allWeapons[0]._id,
                        dropChance: 1,
                        dateFrom: '2001-01-01',
                        dateTo: '2009-01-01',
                        minSizeOfGroup: 5,
                        minDifficulty: 1,
                    },
                    {
                        boss_id: allBosses[2]._id,
                        weapon_id: allWeapons[2]._id,
                        dropChance: 1,
                        dateFrom: '2001-01-01',
                        dateTo: '2009-01-01',
                        minSizeOfGroup: 5,
                        minDifficulty: 1,
                    },


                ]);
            } else {
                return drops;
            }
        });
};