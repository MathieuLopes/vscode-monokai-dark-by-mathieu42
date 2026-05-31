# Publishing — Monokai Dark by Mathieu42

Guide to publish and update this extension on the [Visual Studio Marketplace](https://marketplace.visualstudio.com).

**Extension ID:** `mathieu42.monokai-dark-by-mathieu42`  
**Publisher:** [mathieu42](https://marketplace.visualstudio.com/manage/publishers/mathieu42)

---

## Prerequisites

1. A [Marketplace publisher](https://marketplace.visualstudio.com/manage) named **mathieu42** (same as `publisher` in `package.json`).
2. Node.js installed (for packaging only).

---

## Package a VSIX

From the project root:

```bash
npm run package
```

Or:

```bash
npx @vscode/vsce package --no-dependencies
```

This creates `monokai-dark-by-mathieu42-<version>.vsix` in the project root (for example `monokai-dark-by-mathieu42-1.1.0.vsix`).

Packaging does **not** require login.

---

## Publish via Marketplace upload (recommended)

Use this when you prefer the web UI instead of `vsce login`.

### First release

1. Bump `version` in `package.json` and update `CHANGELOG.md`.
2. Run `npm run package`.
3. Open [publisher mathieu42](https://marketplace.visualstudio.com/manage/publishers/mathieu42).
4. Click **New extension** → **Visual Studio Code** (not Visual Studio, not Azure DevOps).
5. Upload the `.vsix` file.
6. Confirm the upload.

The Marketplace page is built from the VSIX contents (`package.json`, README, icon, theme, etc.).

### Subsequent releases

1. Bump version, update changelog, run `npm run package`.
2. Open the existing extension on the publisher page.
3. **Upload** / **Update** with the new `.vsix`.

### Verify

After a few minutes, search for **Monokai Dark by Mathieu42** (publisher: **mathieu42**) in VS Code or Cursor.

Direct link (after first publish):

https://marketplace.visualstudio.com/items?itemName=mathieu42.monokai-dark-by-mathieu42

---

## Publish via CLI (optional)

Requires an Azure DevOps Personal Access Token with **Marketplace → Manage** scope.

1. Create a PAT at https://dev.azure.com → **User settings** → **Personal access tokens**  
   - Organization: **All accessible organizations**  
   - Scope: **Marketplace (Manage)**
2. Login and publish:

```bash
npx @vscode/vsce login mathieu42
npm run publish
```

---

## GitHub Release

Tagging `v*` triggers the [release workflow](.github/workflows/release.yml) to attach the VSIX to a GitHub Release.

```bash
git tag v1.1.0
git push origin v1.1.0
```

Or manually:

```bash
npm run package
gh release create v1.1.0 monokai-dark-by-mathieu42-1.1.0.vsix --title "v1.1.0" --notes-file CHANGELOG.md
```

---

## Open VSX (optional)

For Cursor, VSCodium, and other Open VSX clients:

```bash
npx ovsx login
npm run publish:openvsx
```

Set the `OVSX_PAT` secret in GitHub to publish automatically on tag (see release workflow).

---

## Verified publisher (optional)

To verify the publisher domain on the Marketplace:

1. **Details** tab → **Verified domain**: enter `mathieu42.com` (no `https://`, no path).
2. **Save** → **Verify** → add the TXT record to your DNS.
3. The domain must respond **HTTP 200** to a `HEAD` request on the root (required by Microsoft).

Prerequisites for the verified badge ([docs](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#verify-a-publisher)):

- Extension published for at least **6 months**
- Domain registered for at least **6 months**

Verification is **not required** to publish the extension.

Check:

```bash
curl -I -X HEAD https://mathieu42.com
# Expected: HTTP/2 200
```

---

## Release checklist

```
[ ] Bump version in package.json
[ ] Update CHANGELOG.md
[ ] npm run package
[ ] Upload .vsix to Marketplace (or npm run publish)
[ ] git tag vX.Y.Z && git push origin vX.Y.Z  (GitHub Release)
[ ] (Optional) npm run publish:openvsx
```

---

## Useful links

- [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [Publisher management](https://marketplace.visualstudio.com/manage)
- [Open VSX](https://open-vsx.org)
