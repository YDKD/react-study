import { useEffect, useState } from 'react'

const useScrollPosition = () => {
	const [scrollX, useSetScrollX] = useState(0)
	const [scrollY, useSetScrollY] = useState(0)

	useEffect(() => {
		function handleScroll() {
			useSetScrollX(window.scrollX)
			useSetScrollY(window.scrollY)
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return { scrollX, scrollY }
}

export default useScrollPosition
