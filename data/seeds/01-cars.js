// STRETCH
const cars = [
    {
        vin: '2HGED6349LH506746',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '3D73Y3CL6BG585460',
        make: 'toyota',
        model: 'camry',
        mileage: 75000,
        title: 'salvage'
    },
    {
        vin: 'JH4DC4450RS002529',
        make: 'ford',
        model: 'focus',
        mileage: 15000,
    }
]

// exports.seed = function(knex) {
//     return knex('cars')
//     .truncate().then(() => {
//         return knex('cars').insert(cars)
//     })
// }

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}