/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as LogoAfter } from "../../assets/logo-after.svg";
import { ReactComponent as LogoBefore } from "../../assets/logo.svg";
import { ReactComponent as OptionsSVG } from "../../assets/options.svg";

// import LogoBefore from "../../assets/logo.svg";
import * as S from "./styles";

function Header() {
	return (
		<S.Container>
			<S.Logo >
				<LogoAfter className="logo--after" />
				<LogoBefore className="logo--before" />
				<h1 aria-hidden="true" className="sr-only">Kanban</h1>
			</S.Logo>
			<S.Title>Platform Launch</S.Title>

			<S.Actions>
				<button className="btn">
					<span className="btn__text">+ Add New Task</span>
					<span className="btn__icon">+</span>
				</button>
				<button className="btn__options"><OptionsSVG /></button>
			</S.Actions>

		</S.Container>
	);
}

export default Header;
