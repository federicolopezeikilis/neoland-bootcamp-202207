describe('createNote', () => {
    beforeEach(() => {
        users.length = 0
        notes.length = 0
    })

    it('should succeed on existing user', () => {
        const user = {
            email: 'carlos@carlos.com',
            id: '213456789',
            password: '123123123'
        }

        users.push(user)

        createNote(user.id, function(error) {
            expect(error).toBeNull()

            expect(notes.length).toBe(1)
            expect(notes[0].id).toBeDefined()
            expect(notes[0].user).toBe(user.id)
            expect(notes[0].text).toBe('')
        })
    })

    it('should fail on unexisting user', () => {
        createNote('unexistingId', function(error) {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe(`user with id unexistingId does not exist`)

            expect(notes.length).toBe(0)
        })
    })
})