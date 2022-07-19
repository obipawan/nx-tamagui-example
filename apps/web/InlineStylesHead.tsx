// eslint-disable-next-line @next/next/no-document-import-in-page
import { Head } from 'next/document';
import { readFileSync } from 'fs';
import { join } from 'path';

export default class InlineStylesHead extends Head {
	getCssLinks: Head['getCssLinks'] = ({ allFiles }) => {
		const { assetPrefix } = this.context;
		if (!allFiles || allFiles.length === 0) return null;
		return allFiles
			.filter((file: never) => /\.css$/.test(file))
			.map((file: never) => (
				<style
					key={file}
					nonce={this.props.nonce}
					data-href={`${assetPrefix}/_next/${file}`}
					dangerouslySetInnerHTML={{
						__html: readFileSync(
							join(process.cwd(), '/dist/apps/web/.next', file),
							'utf-8',
						),
					}}
				/>
			));
	};
}
