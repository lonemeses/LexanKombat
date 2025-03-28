const tg = window.Telegram.WebApp

export function useTelegram() {
    const onClose = () => {
        tg.close()
    }

    return {
        onClose,
        user: tg.initDataUnsafe.user,
        tg
    }
}