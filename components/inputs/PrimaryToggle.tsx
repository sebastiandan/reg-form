import { useState } from 'react'
import { Switch, Transition } from '@headlessui/react'

interface PrimaryToggle {}

export const PrimaryToggle = ({}: PrimaryToggle) => {
	const [enabled, setEnabled] = useState(false)

	const RenderRunnerInner = () => {
		const RenderCicle = () => {
			return <div className={`bg-[#F1F3F5] h-[2px] w-[2px] rounded-full`} />
		}

		return (
			<div className={`grid grid-cols-1 gap-y-[2px] w-[7px]`}>
				<div className={`flex justify-between`}>
					<RenderCicle />
					<RenderCicle />
				</div>
				<div className={`flex justify-between`}>
					<RenderCicle />
					<RenderCicle />
				</div>
				<div className={`flex justify-between`}>
					<RenderCicle />
					<RenderCicle />
				</div>
			</div>
		)
	}

	return (
		<Switch
			checked={enabled}
			onChange={setEnabled}
			className={`${
				enabled ? 'bg-PrimaryBlue' : 'bg-GrayLight'
			} relative inline-flex items-center rounded-10 p-[3px] h-[30px] w-[60px] md:hover:shadow-xl md:hover:scale-110`}
		>
			<Transition
				show={enabled}
				enter="transition-opacity duration-300"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition-opacity duration-150"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<div
					className={`absolute top-0 text-white left-[10px] text-[11px] h-full flex items-center`}
				>
					<span>YES</span>
				</div>
			</Transition>
			<Transition
				show={!enabled}
				enter="transition-opacity duration-300"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition-opacity duration-150"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<div
					className={`absolute top-0 text-Gray right-[13px] text-[11px] h-full flex items-center`}
				>
					<span>NO</span>
				</div>
			</Transition>
			<span
				className={`${
					enabled ? 'translate-x-[35px]' : 'translate-x-0'
				} inline-block py-[7px] px-[6px] transform bg-white rounded-7 shadow-md`}
			>
				<RenderRunnerInner />
			</span>
		</Switch>
	)
}
