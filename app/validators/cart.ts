import vine from '@vinejs/vine'

export const addItemCart = vine.compile(
    vine.object({
        id: vine.number(),
        quantity: vine.number(),
    })
)
